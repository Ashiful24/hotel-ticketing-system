-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "isApproved" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "currentTickets" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userTypes" (
    "id" SERIAL NOT NULL,
    "userTypeName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "userTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_userType" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "usertypeId" INTEGER NOT NULL,

    CONSTRAINT "user_userType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "userTypes_userTypeName_key" ON "userTypes"("userTypeName");

-- AddForeignKey
ALTER TABLE "user_userType" ADD CONSTRAINT "user_userType_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_userType" ADD CONSTRAINT "user_userType_usertypeId_fkey" FOREIGN KEY ("usertypeId") REFERENCES "userTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
