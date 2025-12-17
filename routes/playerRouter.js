// playerRouter.js

const { Router } = require('express');
const playerRouter = Router();
const { startNewGame, stopGame } = require('../controllers/playersControllers');

// POST /players
playerRouter.post('/', startNewGame);

// PUT /players/:id
playerRouter.put('/:playerId', stopGame);

// GET /players
playerRouter.get('/', (req, res, next) => {
  res.status(200).json({ name: 'Jeff', time: 230 });
});

module.exports = playerRouter;
