import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from '@/auth/roles.decorator';
import { RolesGuard } from '@/auth/roles.guard';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department-dto';
import { UpdateDepartmentDto } from './dto/update-department-dto';

@UseGuards(AuthGuard, RolesGuard)
@Controller('department')
export class DepartmentController {

    constructor(private departmentService: DepartmentService) { }

    @Roles("Admin")
    @Post('/add')
    async addDepartment(@Body() createDepartmentDTO: CreateDepartmentDto) {
        await this.departmentService.addNewDepartment(createDepartmentDTO);
    }

    @Roles("Admin", "Staff")
    @Get('/list')
    async getAllDepartment() {
        return this.departmentService.getDepartmentList();
    }

    @Roles("Admin")
    @Put('/update/:id')
    async updateDepartment(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDepartmentDto: UpdateDepartmentDto) {
        await this.departmentService.updateDepartment(id, updateDepartmentDto);
    }

    @Roles("Admin")
    @Delete('/delete/:id')
    async deleteDepartment(@Param('id', ParseIntPipe) id: number) {

        await this.departmentService.deleteDepartment(id);
    }
}
