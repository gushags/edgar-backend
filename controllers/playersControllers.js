// playersControllers.js

const { prisma } = require('../lib/prisma');

async function startNewGame(req, res, next) {
  const player = await prisma.player.create({ data: { time: 0 } });
  res.json({ data: player, message: 'New game started.' });
}

async function stopGame(req, res, next) {
  console.log(req.body);
  const { time } = req.body;
  const { playerId } = req.params;
  console.log(req.params);
  const player = await prisma.player.update({
    where: { id: parseInt(playerId) },
    data: { time: time },
  });
  res.json({ data: player, message: 'Timer stopped' });
}

module.exports = { startNewGame, stopGame };
