/*
  Warnings:

  - You are about to drop the column `taskId` on the `Tags` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_TagsToTasks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_TagsToTasks_A_fkey" FOREIGN KEY ("A") REFERENCES "Tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TagsToTasks_B_fkey" FOREIGN KEY ("B") REFERENCES "Tasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Tags" ("id", "name") SELECT "id", "name" FROM "Tags";
DROP TABLE "Tags";
ALTER TABLE "new_Tags" RENAME TO "Tags";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_TagsToTasks_AB_unique" ON "_TagsToTasks"("A", "B");

-- CreateIndex
CREATE INDEX "_TagsToTasks_B_index" ON "_TagsToTasks"("B");
