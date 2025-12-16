-- CreateTable
CREATE TABLE "Leaderboard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Anonymous',
    "time" INTEGER NOT NULL,

    CONSTRAINT "Leaderboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coordinates" (
    "id" SERIAL NOT NULL,
    "xCoord" INTEGER NOT NULL,
    "yCoord" INTEGER NOT NULL,
    "correct" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Coordinates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timer" (
    "id" SERIAL NOT NULL,
    "timer" INTEGER NOT NULL,

    CONSTRAINT "Timer_pkey" PRIMARY KEY ("id")
);
