import { Module } from '@nestjs/common';
import { UserrolesController } from './userroles.controller';
import { UserrolesService } from './userroles.service';
import { PrismaService } from '@/prisma.service';

@Module({
  controllers: [UserrolesController],
  providers: [UserrolesService, PrismaService]
})
export class UserrolesModule {}
