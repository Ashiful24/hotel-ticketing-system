/*
  Warnings:

  - Added the required column `departmentId` to the `issueType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "issueType" ADD COLUMN     "departmentId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "issueType" ADD CONSTRAINT "issueType_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
