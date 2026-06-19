import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AssignUserRoleDto } from './dto/assign-role-dto';
import { CreateRoleDto } from './dto/create-role-dto';
import { UnAssignUserRoleDto } from './dto/unassign-role-dto';
import { UpdateRoleDto } from './dto/update-role-dto';
import { UserrolesService } from './userroles.service';

@Controller('role')
export class UserrolesController {
  constructor(private userRoleService: UserrolesService) {}

  @Post('/create')
  async addRoles(@Body() createRoleDTO: CreateRoleDto) {
    return await this.userRoleService.addRole(createRoleDTO);
  }

  @Put('/update/:id')
  public updateRoles(
    @Body() updateRoleDTO: UpdateRoleDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userRoleService.updateRole(id, updateRoleDTO);
  }

  @Delete('/delete/:id')
  async deleteRoles(@Param('id', ParseIntPipe) id: number) {
    await this.userRoleService.deleteRole(id);
    return { message: 'Role deleted successfully' };
  }

  @Get('/list')
  async getAllRoles() {
    return await this.userRoleService.getRolesList();
  }

  @Get('/getByDepartment/:departmentId')
  async getRolesByDepartmentId(
    @Param('departmentId', ParseIntPipe) departmentId: number,
  ) {
    return await this.userRoleService.getRolesByDepartmentId(departmentId);
  }

  @Post('assign')
  async assignRole(@Body() assignDto: AssignUserRoleDto) {
    return await this.userRoleService.assignRole(assignDto);
  }

  @Post('/unassign')
  async unassignRole(@Body() usassignDto: UnAssignUserRoleDto) {
    return await this.userRoleService.unassignRole(usassignDto);
  }

  //get staffs by role and department id
}
