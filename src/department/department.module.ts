import { UsersService } from '@/users/users.service';
import { Module } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';

@Module({
  providers: [DepartmentService, PrismaService, UsersService],
  controllers: [DepartmentController]
})
export class DepartmentModule { }
