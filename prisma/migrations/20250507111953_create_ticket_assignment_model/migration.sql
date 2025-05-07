-- CreateTable
CREATE TABLE "ticketAssignment" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "assignTo" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deadline" TIMESTAMP(3),
    "closeAt" TIMESTAMP(3),
    "comment" TEXT,

    CONSTRAINT "ticketAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ticketAssignment_ticketId_key" ON "ticketAssignment"("ticketId");

-- AddForeignKey
ALTER TABLE "ticketAssignment" ADD CONSTRAINT "ticketAssignment_assignTo_fkey" FOREIGN KEY ("assignTo") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticketAssignment" ADD CONSTRAINT "ticketAssignment_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
