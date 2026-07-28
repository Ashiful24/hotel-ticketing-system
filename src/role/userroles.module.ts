import { PrismaService } from '@/prisma.service';
import { Module } from '@nestjs/common';
import { UserrolesController } from './userroles.controller';
import { UserrolesService } from './userroles.service';
import { DepartmentModule } from '@/department/department.module';

@Module({
  imports: [DepartmentModule],
  controllers: [UserrolesController],
  providers: [UserrolesService, PrismaService],
})
export class UserrolesModule {}
