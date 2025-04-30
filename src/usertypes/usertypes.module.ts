import { Module } from '@nestjs/common';
import { UsertypesController } from './usertypes.controller';
import { UsertypesService } from './usertypes.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsertypesController],
  providers: [UsertypesService, PrismaService]
})
export class UsertypesModule {}
