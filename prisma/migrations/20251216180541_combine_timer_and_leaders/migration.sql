/*
  Warnings:

  - You are about to drop the `Timer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `stop` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `time` on the `Leaderboard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Leaderboard" ADD COLUMN     "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "stop" TIMESTAMP(3) NOT NULL,
DROP COLUMN "time",
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Timer";
