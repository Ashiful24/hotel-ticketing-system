import { Roles } from '@/auth/roles.decorator';
import { RolesGuard } from '@/auth/roles.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserType } from '@prisma/client';
import { AuthGuard } from '@/auth/auth.guard';
import { AssignUserRoleDto } from './dto/assign-role-dto';
import { CreateRoleDto } from './dto/create-role-dto';
import { UnAssignUserRoleDto } from './dto/unassign-role-dto';
import { UpdateRoleDto } from './dto/update-role-dto';
import { UserrolesService } from './userroles.service';

@Controller('role')
export class UserrolesController {
  constructor(private userRoleService: UserrolesService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserType.ADMIN)
  @Post('/create')
  async addRoles(@Body() createRoleDTO: CreateRoleDto) {
    return await this.userRoleService.addRole(createRoleDTO);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserType.ADMIN)
  @Put('/update/:id')
  public updateRoles(
    @Body() updateRoleDTO: UpdateRoleDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userRoleService.updateRole(id, updateRoleDTO);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserType.ADMIN)
  @Delete('/delete/:id')
  async deleteRoles(@Param('id', ParseIntPipe) id: number) {
    await this.userRoleService.deleteRole(id);
    return { message: 'Role deleted successfully' };
  }

  @UseGuards(AuthGuard)
  @Get('/list')
  async getAllRoles() {
    return await this.userRoleService.getRolesList();
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.SUPERVISOR)
  @Get('/getByDepartment/:departmentId')
  async getRolesByDepartmentId(
    @Param('departmentId', ParseIntPipe) departmentId: number,
  ) {
    return await this.userRoleService.getRolesByDepartmentId(departmentId);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.SUPERVISOR)
  @Get('/staff/:roleId')
  async getStaffByRoleId(@Param('roleId', ParseIntPipe) roleId: number) {
    return await this.userRoleService.getStaffByRoleId(roleId);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserType.ADMIN)
  @Post('assign')
  async assignRole(@Body() assignDto: AssignUserRoleDto) {
    return await this.userRoleService.assignRole(assignDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserType.ADMIN)
  @Post('/unassign')
  async unassignRole(@Body() usassignDto: UnAssignUserRoleDto) {
    return await this.userRoleService.unassignRole(usassignDto);
  }
}
