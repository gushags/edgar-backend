/*
  Warnings:

  - You are about to drop the `Coordinates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Leaderboard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Coordinates";

-- DropTable
DROP TABLE "Leaderboard";

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Anonymous',
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stop" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "man" BOOLEAN NOT NULL DEFAULT false,
    "bull" BOOLEAN NOT NULL DEFAULT false,
    "duck" BOOLEAN NOT NULL DEFAULT false,
    "gnome" BOOLEAN NOT NULL DEFAULT false,
    "poe" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "xCoord" INTEGER NOT NULL,
    "yCoord" INTEGER NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);
