/*
  Warnings:

  - A unique constraint covering the columns `[departmentName]` on the table `department` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userRoleName]` on the table `userRole` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "department_departmentName_key" ON "department"("departmentName");

-- CreateIndex
CREATE UNIQUE INDEX "userRole_userRoleName_key" ON "userRole"("userRoleName");
