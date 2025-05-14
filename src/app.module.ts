import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsertypesModule } from './usertypes/usertypes.module';
import { UserrolesModule } from './userroles/userroles.module';
import { DepartmentModule } from './department/department.module';
import { AuthModule } from './auth/auth.module';
import { TicketCreationModule } from './ticket-creation/ticket-creation.module';
import { TicketCreationService } from './ticket-creation/ticket-creation.service';
import { TicketAssingmentModule } from './ticket-assingment/ticket-assingment.module';



@Module({
  imports: [UsersModule, UsertypesModule, UserrolesModule, DepartmentModule, AuthModule, TicketCreationModule, TicketAssingmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
