/*
  Warnings:

  - You are about to drop the column `foundAt` on the `FoundTarget` table. All the data in the column will be lost.
  - You are about to drop the column `sessionId` on the `FoundTarget` table. All the data in the column will be lost.
  - You are about to drop the column `targetKey` on the `FoundTarget` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[playerId,targetId]` on the table `FoundTarget` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `playerId` to the `FoundTarget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetId` to the `FoundTarget` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FoundTarget" DROP CONSTRAINT "FoundTarget_sessionId_fkey";

-- DropIndex
DROP INDEX "FoundTarget_sessionId_targetKey_key";

-- AlterTable
ALTER TABLE "FoundTarget" DROP COLUMN "foundAt",
DROP COLUMN "sessionId",
DROP COLUMN "targetKey",
ADD COLUMN     "playerId" INTEGER NOT NULL,
ADD COLUMN     "targetId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "FoundTarget_playerId_targetId_key" ON "FoundTarget"("playerId", "targetId");

-- AddForeignKey
ALTER TABLE "FoundTarget" ADD CONSTRAINT "FoundTarget_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoundTarget" ADD CONSTRAINT "FoundTarget_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "Target"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
