/*
  Warnings:

  - Added the required column `userId` to the `Tags` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tags" ADD COLUMN     "userId" TEXT NOT NULL;
