import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';
import { DepartmentModule } from './department/department.module';
import { UserrolesModule } from './role/userroles.module';
import { TicketCreationModule } from './ticket/ticket-creation.module';




@Module({
  imports: [UsersModule, UserrolesModule, DepartmentModule, AuthModule, TicketCreationModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
