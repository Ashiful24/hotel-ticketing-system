import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsertypesModule } from './usertypes/usertypes.module';
import { UserrolesModule } from './userroles/userroles.module';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [UsersModule, UsertypesModule, UserrolesModule, DepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
