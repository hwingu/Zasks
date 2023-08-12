-- CreateTable
CREATE TABLE "Tags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    CONSTRAINT "Tags_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Tasks" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
