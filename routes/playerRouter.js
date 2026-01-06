// playerRouter.js

const { Router } = require('express');
const playerRouter = Router();
const {
  startNewGame,
  stopGame,
  getLeaderboard,
  submitGuess,
} = require('../controllers/playersControllers');

// POST /players
playerRouter.post('/', startNewGame);

// POST /players/:id/stop
playerRouter.post('/:playerId/stop', stopGame);

// POST /players/:playerId/guess
playerRouter.post('/:playerId/guess', submitGuess);

// GET /players
playerRouter.get('/', getLeaderboard);

module.exports = playerRouter;
