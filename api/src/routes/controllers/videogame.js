const  axios  = require('axios');
const {Videogame, Genre} = require ('../../db')
const {
    YOUR_API_KEY
  } = process.env;

const getGameId = async (req, res, next) => {
    const {id} = req.params;
    var gameDetail;
    if (typeof id === 'string' && id.length > 10){
        try {
            gameDetail = await Videogame.findByPk(id,{
                include: {
                    model : Genre,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
            }})
            gameDetail ={
                name: gameDetail?.name,
                image: gameDetail?.image,
                genres: gameDetail.genres?.map(g=>g.name+ ' '),
                description: gameDetail?.description,
                released: gameDetail?.released,
                rating: gameDetail?.rating,
                platforms: gameDetail.platforms
            }
            
            
            if (!gameDetail) throw new Error('ERROR 500: Videogame not found.')
        } catch (error) {
            return next (error)
        }
        
    } else {
        try {
            gameDetail = await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`)
            if (!gameDetail) throw new Error ('Error 500: Videogame not found')
            gameDetail = {
            name: gameDetail.data.name,
            image: gameDetail.data.background_image,
            genres: gameDetail.data.genres?.map(g=>g.name+ ' '),
            description: gameDetail.data.description,
            released: gameDetail.data.released,
            rating: gameDetail.data.rating,
            platforms: gameDetail.data.platforms?.map(p=>p.platform.name + ' ')
        }
        } catch (error) {
            return next (error)
        }
        
    }
    console.log(gameDetail)
    res.json(gameDetail);
}

const addGame = async (req, res, next) => {
    let {name, description, released, rating, platforms, genres} = req.body;
    try {
        let videoGameCreate = await Videogame.create ({
            name,
            description,
            released,
            rating,
            platforms
        })
        let genreDb = await Genre.findAll({
            where:{name : genres }
            
        })
        // console.log (genreDb)
        await videoGameCreate.addGenres(genreDb)
        res.send ('Game created successfully')
        
    } catch (error) {
        return next (error)
    }
    
}

module.exports = {
    getGameId,
    addGame
}