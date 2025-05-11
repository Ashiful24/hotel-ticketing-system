/*
  Warnings:

  - Made the column `currentStatusId` on table `tickets` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_currentStatusId_fkey";

-- AlterTable
ALTER TABLE "tickets" ALTER COLUMN "currentStatusId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_currentStatusId_fkey" FOREIGN KEY ("currentStatusId") REFERENCES "statusType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
