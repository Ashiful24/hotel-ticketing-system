/*
  Warnings:

  - A unique constraint covering the columns `[code,departmentId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Role_name_departmentId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Role_code_departmentId_key" ON "Role"("code", "departmentId");
