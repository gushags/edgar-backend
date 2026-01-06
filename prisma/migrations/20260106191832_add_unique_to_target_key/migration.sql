/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `Target` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Target_key_key" ON "Target"("key");
