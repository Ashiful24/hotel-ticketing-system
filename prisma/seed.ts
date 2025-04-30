import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Seed Departments
  await prisma.department.createMany({
    data: [
      { departmentName: 'Housekeeping' },
      { departmentName: 'Maintenance' },
      { departmentName: 'Reception' },
      { departmentName: 'Room Service' },
      { departmentName: 'IT' },
      { departmentName: 'Finance and Accounts' },      
    ],
  });

  // Seed User Types
  await prisma.userTypes.createMany({
    data: [
      { userTypeName: 'Guest' },
      { userTypeName: 'Staff' },
      { userTypeName: 'Manager' },
      { userTypeName: 'Admin' },
    ],
  });

  // Seed User Roles
  await prisma.userRole.createMany({
    data: [
      { userRoleName: 'Can_Create_Ticket' },
      { userRoleName: 'Can_Assign_Ticket' },
      { userRoleName: 'Can_Manage_User' },
      { userRoleName: 'Can_Close_Ticket' },
      { userRoleName: 'Can_Change-Ticket-priorities'},
      { userRoleName: 'Can_View-Dashboard'},
      { userRoleName: 'Can_Change-Ticket-Status'},
      { userRoleName: 'View-All-Ticket'},
      { userRoleName: 'Can-Reopen-Ticket'},
      
    ],
  });
}

main()
  .then(() => {
    console.log('Seeding completed.');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
