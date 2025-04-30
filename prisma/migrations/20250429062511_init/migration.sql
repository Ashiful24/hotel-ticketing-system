-- CreateTable
CREATE TABLE "userRole" (
    "id" SERIAL NOT NULL,
    "userRoleName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "userRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_userRole" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userRoleId" INTEGER NOT NULL,

    CONSTRAINT "user_userRole_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_userRole" ADD CONSTRAINT "user_userRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_userRole" ADD CONSTRAINT "user_userRole_userRoleId_fkey" FOREIGN KEY ("userRoleId") REFERENCES "userRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
