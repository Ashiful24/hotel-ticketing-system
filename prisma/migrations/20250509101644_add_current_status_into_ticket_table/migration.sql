-- AlterTable
ALTER TABLE "tickets" ADD COLUMN     "currentStatusId" INTEGER;

-- CreateTable
CREATE TABLE "statusType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "statusType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "statusType_name_key" ON "statusType"("name");

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_currentStatusId_fkey" FOREIGN KEY ("currentStatusId") REFERENCES "statusType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
