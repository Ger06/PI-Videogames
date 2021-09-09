// const express = require ('express');
// const { mountpath } = require('../app');
// const {Genre} = require ('../db');
// const axios = require ('axios');
// const {
//     YOUR_API_KEY
//   } = process.env;

// const router = express.Router();

// router.get('/', async (req, res)=>{
//     const allApiGenre = await axios.get (`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`);
//     await allApiGenre.data.results.map(g=>g).forEach(element => {
//         Genre.findOrCreate({
//             where: {name: element.name,
//             }
//         })
//     })
    
//     const allGenre = await Genre.findAll();
//     res.send (allGenre);
     
        
   
    
// })

// module.exports = router