// playersControllers.js

const { prisma } = require('../lib/prisma');

async function startNewGame(req, res, next) {
  const player = await prisma.player.create({ data: { time: 0 } });
  res.json({ data: player, message: 'New game started.' });
}

module.exports = { startNewGame };
