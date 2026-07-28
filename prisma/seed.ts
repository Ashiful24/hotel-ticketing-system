import { PrismaClient, UserType } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const DEFAULT_PASSWORD = 'Admin@123';

async function main() {
  const passwordHash = await bcrypt.hash(DEFAULT_PASSWORD, 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@hotel.com' },
    update: {},
    create: {
      firstName: 'System',
      lastName: 'Admin',
      email: 'admin@hotel.com',
      password: passwordHash,
      phone: '01700000001',
      nid: '1000000001',
      address: 'Hotel HQ',
      userType: UserType.ADMIN,
    },
  });

  const housekeeping = await prisma.department.upsert({
    where: { code: 'HK' },
    update: {
      name: 'Housekeeping',
      description: 'Room cleaning and laundry',
    },
    create: {
      name: 'Housekeeping',
      code: 'HK',
      description: 'Room cleaning and laundry',
    },
  });

  const engineering = await prisma.department.upsert({
    where: { code: 'ENG' },
    update: {
      name: 'Engineering',
      description: 'Maintenance and repairs',
    },
    create: {
      name: 'Engineering',
      code: 'ENG',
      description: 'Maintenance and repairs',
    },
  });

  const fnb = await prisma.department.upsert({
    where: { code: 'FNB' },
    update: {
      name: 'Food & Beverage',
      description: 'Restaurant and room service',
    },
    create: {
      name: 'Food & Beverage',
      code: 'FNB',
      description: 'Restaurant and room service',
    },
  });

  await prisma.role.upsert({
    where: { code: 'HK-CLEANER' },
    update: {
      name: 'Room Cleaner',
      description: 'Cleans guest rooms',
      departmentId: housekeeping.id,
    },
    create: {
      name: 'Room Cleaner',
      code: 'HK-CLEANER',
      description: 'Cleans guest rooms',
      departmentId: housekeeping.id,
    },
  });

  await prisma.role.upsert({
    where: { code: 'HK-LAUNDRY' },
    update: {
      name: 'Laundry Staff',
      description: 'Handles laundry operations',
      departmentId: housekeeping.id,
    },
    create: {
      name: 'Laundry Staff',
      code: 'HK-LAUNDRY',
      description: 'Handles laundry operations',
      departmentId: housekeeping.id,
    },
  });

  await prisma.role.upsert({
    where: { code: 'ENG-TECH' },
    update: {
      name: 'Technician',
      description: 'Handles AC, electrical and plumbing issues',
      departmentId: engineering.id,
    },
    create: {
      name: 'Technician',
      code: 'ENG-TECH',
      description: 'Handles AC, electrical and plumbing issues',
      departmentId: engineering.id,
    },
  });

  await prisma.role.upsert({
    where: { code: 'FNB-WAITER' },
    update: {
      name: 'Waiter',
      description: 'Serves restaurant guests',
      departmentId: fnb.id,
    },
    create: {
      name: 'Waiter',
      code: 'FNB-WAITER',
      description: 'Serves restaurant guests',
      departmentId: fnb.id,
    },
  });

  console.log('Seed completed successfully.');
  console.log('----------------------------------------');
  console.log(`Admin login : ${admin.email}`);
  console.log(`Password    : ${DEFAULT_PASSWORD}`);
  console.log('Departments : HK, ENG, FNB');
  console.log('Roles       : HK-CLEANER, HK-LAUNDRY, ENG-TECH, FNB-WAITER');
  console.log('----------------------------------------');
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
