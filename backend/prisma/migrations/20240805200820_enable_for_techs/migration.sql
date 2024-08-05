-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Technician" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Technician" ("id", "lastName", "name") SELECT "id", "lastName", "name" FROM "Technician";
DROP TABLE "Technician";
ALTER TABLE "new_Technician" RENAME TO "Technician";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
