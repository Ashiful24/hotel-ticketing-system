import { PrismaService } from '@/prisma.service';
import { UsersModule } from '@/users/users.module';
import { Module } from '@nestjs/common';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';

@Module({
  imports: [UsersModule],
  providers: [DepartmentService, PrismaService],
  controllers: [DepartmentController],
  exports: [DepartmentService],
})
export class DepartmentModule {}
