/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `games` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `label` to the `games` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "games" ADD COLUMN     "label" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "games_label_key" ON "games"("label");
