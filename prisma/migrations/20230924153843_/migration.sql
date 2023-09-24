/*
  Warnings:

  - Added the required column `colour` to the `Tags` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tags" ADD COLUMN     "colour" TEXT NOT NULL;
