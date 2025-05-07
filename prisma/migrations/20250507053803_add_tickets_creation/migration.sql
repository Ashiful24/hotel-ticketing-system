-- CreateTable
CREATE TABLE "tickets" (
    "id" SERIAL NOT NULL,
    "ticketCode" TEXT NOT NULL,
    "roomNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER,
    "feedback" TEXT,
    "creatorId" INTEGER NOT NULL,
    "priorityId" INTEGER NOT NULL,
    "issueTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticketPriority" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ticketPriority_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "issueType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "issueType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tickets_ticketCode_key" ON "tickets"("ticketCode");

-- CreateIndex
CREATE UNIQUE INDEX "ticketPriority_name_key" ON "ticketPriority"("name");

-- CreateIndex
CREATE UNIQUE INDEX "issueType_name_key" ON "issueType"("name");

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_priorityId_fkey" FOREIGN KEY ("priorityId") REFERENCES "ticketPriority"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_issueTypeId_fkey" FOREIGN KEY ("issueTypeId") REFERENCES "issueType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
