// const Router = require ('express');
// const axios = require ('axios');
// const { v4: uuidv4 } = require('uuid');

// const {Videogame, Genre}= require('../db.js');
// const {
//     YOUR_API_KEY
//   } = process.env;

// const router = Router();

// const getApiGames = async ()=>{
//     var apiUrl = [
//          axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=1`),
//          axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=2`),
//          axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=3`),
//          axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=4`),
//          axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=5`),
//          axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=6`),
//          axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=7`),
//          axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=8`),
//          axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=9`),
//          axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=10`),
//     ];
//     var apiGamesCharge = await Promise.all(apiUrl);
//     // console.log (apiGamesCharge)
//     let apiInfo =   apiGamesCharge.map(p=>p.data.results.map( g=>{
//         return {
//             name: g.name,
//             // id: g.id,
//             // description: g.description,
//             // released: g.released,
//             // rating: g.rating,
//             // platforms: g.platforms.map(p=>p.platform.name),
//             img: g.background_image,
//             genre: g.genres.map(g=> g.name),
//             // addGenres(genre)

       
//         }

//     }))
//     console.log(apiInfo[0])

//     return apiInfo[0]
//     // let add = await Videogame.bulkCreate(apiInfo[0]);
    
// }



// const getDbGames = async ()=>{
//     return await Videogame.findAll({
//         include: {
//             model : Genre,
//             attributes: ['name'],
//             through: {
//                 attributes: [],
//             }
//         }
//     })
// }

// const getAllGames = async ()=>{
//     const apiGames = await getApiGames();
//     let dbGames = await getDbGames();
//     dbGames = dbGames.map(g=>{
//         return{
//             name: g.name,
//             genre: g.genres.map(g=>g.name)
//         }
//     })
//     const allGames = apiGames.concat(dbGames);
//     console.log (allGames)
//     return allGames
// }

// router.get ('/', async (req,res)=>{
//     const {name} = req.query;
//     const totalGames = await getAllGames();
//     if (name){
//         const searchGame = await totalGames.filter(g=> g.name.toLowerCase().includes(name.toLowerCase()));
//         searchGame.length ? 
//         res.status(200).send (searchGame):
//         res.status(404).send('No esta');

//     }else{
//         res.status(200).send(totalGames);
//     }
    
// })

// module.exports = router

