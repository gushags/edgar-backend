/*
  Warnings:

  - Changed the type of `time` on the `Player` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Player" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "stop" DROP NOT NULL,
DROP COLUMN "time",
ADD COLUMN     "time" INTEGER NOT NULL;
