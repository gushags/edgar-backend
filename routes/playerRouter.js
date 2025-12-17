// playerRouter.js

const { Router } = require('express');
const playerRouter = Router();
const {
  startNewGame,
  stopGame,
  getLeaderboard,
  getGraystates,
  updateGraystates,
} = require('../controllers/playersControllers');

// POST /players
playerRouter.post('/', startNewGame);

// POST /players/:id/stop
playerRouter.post('/:playerId/stop', stopGame);

// GET /players
playerRouter.get('/', getLeaderboard);

// GET /players/:playerId/graystates
playerRouter.get('/:playerId/graystates', getGraystates);

// PUT /players/:playerId/graystates
playerRouter.put('/:playerId/graystates', updateGraystates);

module.exports = playerRouter;
