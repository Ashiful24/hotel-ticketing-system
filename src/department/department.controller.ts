import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department-dto';
import { UpdateDepartmentDto } from './dto/update-department-dto';
import { AssignDepartmentDto } from './dto/assign-department-dto';
import { UnAssignDepartmentDto } from './unassign-department-dto';
import { Roles } from 'src/roles/roles.decorator';

@Controller('department')
export class DepartmentController {

    constructor(private departmentService: DepartmentService) { }

    @Roles("Admin")
    @Post('/add')
    async addDepartment(@Body() createDepartmentDTO: CreateDepartmentDto) {
        await this.departmentService.addNewDepartment(createDepartmentDTO);
    }

    @Roles("Admin")
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

    @Roles("Admin")
    @Post('/assign')
    async assignDepartment( @Body() assignDto: AssignDepartmentDto) 
    {

        return await this.departmentService.assignDepartment(assignDto);
    }

    @Roles("Admin")
    @Post('/unassign')
    async unassignDepartment( @Body() unassignDto: UnAssignDepartmentDto) 
    {

        return await this.departmentService.unassignDepartment(unassignDto);
    }

}
