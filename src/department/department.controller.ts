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
import { AuthGuard } from 'src/auth/auth.guard';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department-dto';
import { UpdateDepartmentDto } from './dto/update-department-dto';

@Controller('department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserType.ADMIN)
  @Post('/create')
  async addDepartment(@Body() createDepartmentDTO: CreateDepartmentDto) {
    return await this.departmentService.createDepartment(createDepartmentDTO);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.FRONTDESK)
  @Get('/list')
  async getAllDepartment() {
    return this.departmentService.getDepartmentList();
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserType.ADMIN)
  @Put('/update/:id')
  async updateDepartment(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return await this.departmentService.updateDepartment(
      id,
      updateDepartmentDto,
    );
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserType.ADMIN)
  @Delete('/delete/:id')
  async deleteDepartment(@Param('id', ParseIntPipe) id: number) {
    return await this.departmentService.deleteDepartment(id);
  }

  @UseGuards(AuthGuard)
  @Get('/supervisor/:supervisorId')
  async getDepartmentBySupervisorId(
    @Param('supervisorId', ParseIntPipe) supervisorId: number,
  ) {
    return await this.departmentService.getDepartmentBySupervisorIdOrThrow(
      supervisorId,
    );
  }
}
