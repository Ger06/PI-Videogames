const {Genre} = require ('../../db');
const axios = require ('axios');
const {
    YOUR_API_KEY
  } = process.env;

const getGenres= async(req, res, next) => {
    try {
        const allApiGenre = await axios.get (`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`);
        await allApiGenre.data.results.map(g=>g).forEach(element => {
        Genre.findOrCreate({
            where: {name: element.name
            }
        })
    })
    
    const allGenre = await Genre.findAll();
    res.json (allGenre);
    } catch (error) {
        next (error);
    }
}

module.exports = {
    getGenres
};