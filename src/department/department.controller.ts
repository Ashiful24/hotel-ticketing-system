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
import { AuthGuard } from 'src/auth/auth.guard';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department-dto';
import { UpdateDepartmentDto } from './dto/update-department-dto';

//@UseGuards(AuthGuard, RolesGuard)
@Controller('department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @Post('/create')
  async addDepartment(@Body() createDepartmentDTO: CreateDepartmentDto) {
    return await this.departmentService.createDepartment(createDepartmentDTO);
  }

  @Get('/list')
  async getAllDepartment() {
    return this.departmentService.getDepartmentList();
  }

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

  @Delete('/delete/:id')
  async deleteDepartment(@Param('id', ParseIntPipe) id: number) {
    return await this.departmentService.deleteDepartment(id);
  }

  @Get('/supervisor/:supervisorId')
  async getDepartmentBySupervisorId(
    @Param('supervisorId', ParseIntPipe) supervisorId: number,
  ) {
    return await this.departmentService.getDepartmentBySupervisorIdOrThrow(
      supervisorId,
    );
  }
}
