-- CreateTable
CREATE TABLE "ticketStatus" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "changnedBy" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,
    "changedAt" TIMESTAMP(3) NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "ticketStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ticketStatus" ADD CONSTRAINT "ticketStatus_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticketStatus" ADD CONSTRAINT "ticketStatus_changnedBy_fkey" FOREIGN KEY ("changnedBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticketStatus" ADD CONSTRAINT "ticketStatus_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "statusType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
