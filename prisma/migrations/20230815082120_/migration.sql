-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "taskId" TEXT,
    CONSTRAINT "Tags_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Tasks" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Tags" ("id", "name", "taskId") SELECT "id", "name", "taskId" FROM "Tags";
DROP TABLE "Tags";
ALTER TABLE "new_Tags" RENAME TO "Tags";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
