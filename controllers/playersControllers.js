// playersControllers.js

const { prisma } = require('../lib/prisma.js');

async function startNewGame(req, res, next) {
  const player = await prisma.player.create({ data: { name: 'Anonymous' } });
  res.json({ data: player, message: 'New game started.' });
}

async function stopGame(req, res, next) {
  const { playerId } = req.params;

  const player = await prisma.player.findUnique({
    where: { id: parseInt(playerId) },
    select: { start: true },
  });

  const stop = new Date();
  const time = Math.floor((stop.getTime() - player.start.getTime()) / 1000);

  const updatedPlayer = await prisma.player.update({
    where: { id: parseInt(playerId) },
    data: {
      stop,
      time,
    },
  });
  res.json({ data: updatedPlayer, message: 'Timer stopped' });
}

async function getLeaderboard(req, res, next) {
  const players = await prisma.player.findMany({
    where: { time: { not: null } },
    take: 10,
    select: { id: true, name: true, time: true },
    orderBy: [{ time: 'asc' }],
  });
  res.json({ data: players, message: 'Top 10 leaders retrieved' });
}

async function submitGuess(req, res) {
  const playerId = parseInt(req.params.playerId);
  const { targetKey, clickX, clickY, dimension } = req.body;

  // Get target data
  const target = await prisma.target.findUnique({
    where: { key: targetKey },
  });

  if (!target) {
    return res.status(400).json({ error: 'Invalid target' });
  }

  // Validate position
  const distanceSquared =
    (clickX * dimension.width - target.xCoord * dimension.width) ** 2 +
    (clickY * dimension.height - target.yCoord * dimension.height) ** 2;

  const distance = Math.sqrt(distanceSquared);
  if (distance > target.radius) {
    return res.json({ success: false });
  }

  // Record found target
  await prisma.foundTarget.upsert({
    where: {
      playerId_targetId: {
        playerId,
        targetId: target.id,
      },
    },
    update: {},
    create: {
      playerId,
      targetId: target.id,
    },
  });

  // Check completion
  const totalTargets = await prisma.target.count();
  const foundCount = await prisma.foundTarget.count({
    where: { playerId },
  });

  let gameComplete = false;

  if (foundCount === totalTargets) {
    gameComplete = true;

    const player = await prisma.player.findUnique({
      where: { id: playerId },
      select: { start: true },
    });

    const stop = new Date();
    const time = Math.round((stop.getTime() - player.start.getTime()) / 1000);

    await prisma.player.update({
      where: { id: playerId },
      data: { stop, time },
    });
  }

  res.json({
    success: true,
    foundTarget: target.key,
    gameComplete,
  });
}

async function updateName(req, res) {
  const { playerId } = req.params;
  const { name } = req.body;
  const updatedPlayer = await prisma.player.update({
    where: { id: parseInt(playerId) },
    data: { name },
  });
  res.json({ data: updatedPlayer, message: 'Successfully updated name.' });
}

module.exports = {
  startNewGame,
  stopGame,
  getLeaderboard,
  submitGuess,
  updateName,
};
