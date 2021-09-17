const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { getGenres } = require('./controllers/genres');
const { getGameId, addGame } = require('./controllers/videogame');
const { games } = require('./controllers/videogames');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', games);


router.get('/videogame/:id', getGameId );
router.post('/videogame', addGame);
router.get('/genres', getGenres);


module.exports = router;
