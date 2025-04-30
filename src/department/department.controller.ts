import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department-dto';
import { UpdateDepartmentDto } from './dto/update-department-dto';

@Controller('department')
export class DepartmentController {

    constructor(private departmentService : DepartmentService){}

    @Post('/add')
    async addDepartment(@Body() createDepartmentDTO : CreateDepartmentDto){
        await this.departmentService.addNewDepartment(createDepartmentDTO);
    }

    @Get('/list')
    async getAllDepartment(){
        return this.departmentService.getDepartmentList();
    }

    @Put('/update/:id')
    async updateDepartment(
         @Param('id', ParseIntPipe)  id : number,
         @Body() updateDepartmentDto : UpdateDepartmentDto )
    {
        await this.departmentService.updateDepartment(id, updateDepartmentDto);
    } 

    @Delete('/delete/:id')
    async deleteDepartment(@Param('id', ParseIntPipe) id: number){

        await this.departmentService.deleteDepartment(id);
    } 

}
