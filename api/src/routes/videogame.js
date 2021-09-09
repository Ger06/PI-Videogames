// const axios  = require('axios');
// const express = require ('express');
// const { v4: uuidv4 } = require('uuid');
// const {Videogame,Genre} = require('../db');
// const {
//     YOUR_API_KEY
//   } = process.env;

// const router = express.Router();

// router.get('/:id', async (req, res )=>{
//     const {id} = req.params;
//     if (!id){
//         return next ({msg: 'No se mando id', status: 500})
//     }
//     var gameDetail
//     if (typeof id === 'string' && id.length > 8){
//        gameDetail = await Videogame.findByPk(id)
//     } else{
//         gameDetail = await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`)
//         gameDetail = {
//             name: gameDetail.data.name,
//             image: gameDetail.data.background_image,
//             genre: gameDetail.data.genres.map(g=>g.name),
//             description: gameDetail.data.description,
//             released: gameDetail.data.released,
//             rating: gameDetail.data.rating,
//             platforms: gameDetail.data.platforms.map(p=>p.platform.name)
//         }
//     }
//     return res.json(gameDetail)

// })


// router.post('/', async (req, res)=>{
//     let {name, description, released, rating, platforms, genre} = req.body
//     let videogameCreated= await Videogame.create({
//         name,
//         description,
//         released,
//         rating,
//         platforms,
//         id: uuidv4()
//     })
//     // genre = genre.toString().charAt(0).toUpperCase()
//     let genreDb = await Genre.findAll({
//         where: {name : genre}
//     })

//     videogameCreated.addGenre(genreDb)
//     res.send('juego creado')

    
// });

// module.exports = router

