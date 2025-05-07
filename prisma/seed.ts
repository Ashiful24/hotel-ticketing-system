import { PrismaClient } from "@prisma/client";

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
    skipDuplicates: true,
  });

  // Seed User Types
  await prisma.userTypes.createMany({
    data: [
      { userTypeName: 'Guest' },
      { userTypeName: 'Staff' },
      { userTypeName: 'Manager' },
      { userTypeName: 'Admin' },
    ],
    skipDuplicates: true,
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
    skipDuplicates: true,
  });

  // Fetch existing departments
  const departments = await prisma.department.findMany();

  const departmentMap = Object.fromEntries(
    departments.map((d) => [d.departmentName, d.id])
  );

  // Seed ticket priorities
  await prisma.ticketPriority.createMany({
    data: [
      { name: 'Low' },
      { name: 'Medium' },
      { name: 'High' },
    ],
    skipDuplicates: true,
  });

  // Seed issue types with corresponding departmentId
  await prisma.issueType.createMany({
    data: [
      { name: 'Room Cleaning', departmentId: departmentMap['Housekeeping'] },
      { name: 'AC Repair', departmentId: departmentMap['Maintenance'] },
      { name: 'Billing Issue', departmentId: departmentMap['Finance and Accounts'] },
      { name: 'WiFi Issue', departmentId: departmentMap['IT'] },
      { name: 'Late Room Service', departmentId: departmentMap['Room Service'] },
      { name: 'Booking Error', departmentId: departmentMap['Reception'] },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Seed complete!');
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
