import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsertypesModule } from './usertypes/usertypes.module';
import { UserrolesModule } from './userroles/userroles.module';
import { DepartmentModule } from './department/department.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, UsertypesModule, UserrolesModule, DepartmentModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
