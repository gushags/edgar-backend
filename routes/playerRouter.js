// playerRouter.js

const { Router } = require('express');
const playerRouter = Router();
const { startNewGame } = require('../controllers/playersControllers');

// POST /players
playerRouter.post('/', startNewGame);

// GET /players
playerRouter.get('/', (req, res, next) => {
  res.status(200).json({ name: 'Jeff', time: 230 });
});

module.exports = playerRouter;
