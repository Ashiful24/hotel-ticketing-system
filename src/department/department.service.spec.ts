import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentService } from './department.service';
import { PrismaService } from '@/prisma.service';
import { UsersService } from '@/users/users.service';

describe('DepartmentService', () => {
  let service: DepartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentService, PrismaService, UsersService],
    }).compile();

    service = module.get<DepartmentService>(DepartmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
