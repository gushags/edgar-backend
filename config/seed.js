// seed.js

require('dotenv').config();
const { prisma } = require('../lib/prisma');

const manObject = {
  xCoord: 0.4210104250200481,
  yCoord: 0.2862888826238136,
  key: 'man',
  radius: 25.0,
};

const bullObj = {
  xCoord: 0.07457898957497995,
  yCoord: 0.3614697866741848,
  key: 'bull',
  radius: 25.0,
};

const duckObj = {
  xCoord: 0.7650360866078588,
  yCoord: 0.13352128559345927,
  key: 'duck',
  radius: 25.0,
};

const gnomeObj = {
  xCoord: 0.6230954290296712,
  yCoord: 0.44146226858377974,
  key: 'gnome',
  radius: 25.0,
};

const poeObj = {
  xCoord: 0.264635124298316,
  yCoord: 0.5876139460577013,
  key: 'poe',
  radius: 25.0,
};

async function main() {
  await prisma.target.create({ data: manObject });
  await prisma.target.create({ data: bullObj });
  await prisma.target.create({ data: duckObj });
  await prisma.target.create({ data: gnomeObj });
  await prisma.target.create({ data: poeObj });
}

main();
