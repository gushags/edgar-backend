/*
  Warnings:

  - You are about to drop the column `bull` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `duck` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `gnome` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `man` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `poe` on the `Player` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Player" DROP COLUMN "bull",
DROP COLUMN "duck",
DROP COLUMN "gnome",
DROP COLUMN "man",
DROP COLUMN "poe";

-- CreateTable
CREATE TABLE "FoundTarget" (
    "id" SERIAL NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "targetKey" TEXT NOT NULL,
    "foundAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FoundTarget_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FoundTarget_sessionId_targetKey_key" ON "FoundTarget"("sessionId", "targetKey");

-- AddForeignKey
ALTER TABLE "FoundTarget" ADD CONSTRAINT "FoundTarget_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
