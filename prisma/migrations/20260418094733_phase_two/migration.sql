/*
  Warnings:

  - You are about to drop the `auditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `issueType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `statusType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ticketAssignment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ticketPriority` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ticketStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tickets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_userRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_userType` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'STAFF', 'FRONTDESK', 'SUPERVISOR');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('OPEN', 'ASSIGNED', 'IN_PROGRESS', 'ON_HOLD', 'DONE', 'VERIFIED', 'CLOSED', 'REOPENED', 'CANCELLED');

-- DropForeignKey
ALTER TABLE "auditLog" DROP CONSTRAINT "auditLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "issueType" DROP CONSTRAINT "issueType_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "ticketAssignment" DROP CONSTRAINT "ticketAssignment_assignTo_fkey";

-- DropForeignKey
ALTER TABLE "ticketAssignment" DROP CONSTRAINT "ticketAssignment_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "ticketStatus" DROP CONSTRAINT "ticketStatus_changnedBy_fkey";

-- DropForeignKey
ALTER TABLE "ticketStatus" DROP CONSTRAINT "ticketStatus_statusId_fkey";

-- DropForeignKey
ALTER TABLE "ticketStatus" DROP CONSTRAINT "ticketStatus_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_currentStatusId_fkey";

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_issueTypeId_fkey";

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_priorityId_fkey";

-- DropForeignKey
ALTER TABLE "user_department" DROP CONSTRAINT "user_department_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "user_department" DROP CONSTRAINT "user_department_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_userRole" DROP CONSTRAINT "user_userRole_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_userRole" DROP CONSTRAINT "user_userRole_userRoleId_fkey";

-- DropForeignKey
ALTER TABLE "user_userType" DROP CONSTRAINT "user_userType_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_userType" DROP CONSTRAINT "user_userType_usertypeId_fkey";

-- DropTable
DROP TABLE "auditLog";

-- DropTable
DROP TABLE "department";

-- DropTable
DROP TABLE "issueType";

-- DropTable
DROP TABLE "statusType";

-- DropTable
DROP TABLE "ticketAssignment";

-- DropTable
DROP TABLE "ticketPriority";

-- DropTable
DROP TABLE "ticketStatus";

-- DropTable
DROP TABLE "tickets";

-- DropTable
DROP TABLE "user";

-- DropTable
DROP TABLE "userRole";

-- DropTable
DROP TABLE "userTypes";

-- DropTable
DROP TABLE "user_department";

-- DropTable
DROP TABLE "user_userRole";

-- DropTable
DROP TABLE "user_userType";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "nid" TEXT NOT NULL,
    "userType" "UserType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "supervisorId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "departmentId" INTEGER NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaffRole" (
    "id" SERIAL NOT NULL,
    "staffId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "StaffRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "ticketCode" TEXT NOT NULL,
    "roomNumber" INTEGER,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "feedback" TEXT,
    "priority" "Priority" NOT NULL DEFAULT 'MEDIUM',
    "status" "TicketStatus" NOT NULL DEFAULT 'OPEN',
    "creatorId" INTEGER NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "assignTo" INTEGER,
    "assignBy" INTEGER,
    "deadline" TIMESTAMP(3),
    "assignAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TicketStatusHistory" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "status" "TicketStatus" NOT NULL,
    "changedBy" INTEGER NOT NULL,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TicketStatusHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "requestBody" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_nid_key" ON "User"("nid");

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "Department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Department_supervisorId_key" ON "Department"("supervisorId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_departmentId_key" ON "Role"("name", "departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "StaffRole_staffId_roleId_key" ON "StaffRole"("staffId", "roleId");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_ticketCode_key" ON "Ticket"("ticketCode");

-- CreateIndex
CREATE INDEX "Ticket_departmentId_idx" ON "Ticket"("departmentId");

-- CreateIndex
CREATE INDEX "Ticket_status_idx" ON "Ticket"("status");

-- CreateIndex
CREATE INDEX "Ticket_assignTo_idx" ON "Ticket"("assignTo");

-- CreateIndex
CREATE INDEX "TicketStatusHistory_ticketId_idx" ON "TicketStatusHistory"("ticketId");

-- CreateIndex
CREATE INDEX "AuditLog_userId_idx" ON "AuditLog"("userId");

-- CreateIndex
CREATE INDEX "AuditLog_timestamp_idx" ON "AuditLog"("timestamp");

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffRole" ADD CONSTRAINT "StaffRole_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffRole" ADD CONSTRAINT "StaffRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_assignTo_fkey" FOREIGN KEY ("assignTo") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketStatusHistory" ADD CONSTRAINT "TicketStatusHistory_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketStatusHistory" ADD CONSTRAINT "TicketStatusHistory_changedBy_fkey" FOREIGN KEY ("changedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
