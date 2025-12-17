// playersControllers.js

const { prisma } = require('../lib/prisma');

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
  const time = Math.round((stop.getTime() - player.start.getTime()) / 1000);

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

async function getGraystates(req, res, next) {
  const { playerId } = req.params;
  const grayStates = await prisma.player.findUnique({
    where: { id: parseInt(playerId) },
    select: {
      man: true,
      bull: true,
      duck: true,
      gnome: true,
      poe: true,
    },
  });
  res.json({ data: grayStates, message: 'GrayStates retrieved' });
}

async function updateGraystates(req, res, next) {
  const { playerId } = req.params;
  const { id } = req.body;
  const updateData = {};
  if (id == 'man') updateData.man = true;
  if (id == 'bull') updateData.bull = true;
  if (id == 'duck') updateData.duck = true;
  if (id == 'gnome') updateData.gnome = true;
  if (id == 'poe') updateData.poe = true;

  const grayStates = await prisma.player.update({
    where: { id: parseInt(playerId) },
    data: updateData,
  });

  res.json({ data: grayStates, message: 'GrayStates updated' });
}

module.exports = {
  startNewGame,
  stopGame,
  getLeaderboard,
  getGraystates,
  updateGraystates,
};
