const axios = require ('axios');
const {Genre, Videogame} = require('../../db.js');
const {
    YOUR_API_KEY
  } = process.env;

const getApiVideogames = async(req, res, next) => {
    const apiUrl = [
        axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=1`),
        axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=2`),
        axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=3`),
        axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=4`),
        axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=5`),
        axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=6`),
        axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=7`),
        axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=8`),
        axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=9`),
        axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=10`),
    ]
    var apiGamesData = await Promise.all(apiUrl);
    let apiInfo = apiGamesData.map(p=>p.data.results.map( g=>{
        return {
            name: g.name,
            image: g.background_image,
            genres: g.genres.map(g=> g.name),
            id : g.id
        }

    }))
    var merged = [].concat.apply([], apiInfo);

// console.log(merged);
    // return apiInfo
    return merged;
    
}

const getDbGames = async (req, res, next) => {
    return await Videogame.findAll ({
        include: {
            model : Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}

const getAllGames = async (req, res, next) =>{
    let apiGames = await getApiVideogames();
    let dbGames = await getDbGames();
    dbGames = dbGames.map(db=>{
        return {
            name: db.name,
            genres: db.genres.map(g=>g.name),
            id : db.id
        }
    })
    let allGames = apiGames.concat(dbGames)
    // console.log(allGames)
    return allGames;
}

const games = async (req, res, next) => {
    const {name} = req.query;
    const totalGames = await getAllGames();
    if (name){
        const searchGame = await totalGames.filter(g=> g.name.toLowerCase().includes(name.toLowerCase()));
        searchGame.length ? 
        res.status(200).send (searchGame):
        res.status(404).send('No esta');

    }else{
        res.status(200).send(totalGames);
    }
}
    


module.exports = {
    games
}