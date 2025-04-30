import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserrolesModule } from './userroles.module';
import { UserrolesService } from './userroles.service';
import { CreateRoleDto } from './dto/create-role-dto';
import { UpdateRoleDto } from './dto/update-role-dto';

@Controller('userroles')
export class UserrolesController {

    constructor(private userRoleService : UserrolesService){}

    @Post('/add')
    async addRoles(@Body() createRoleDTO: CreateRoleDto){
        await this.userRoleService.addRole(createRoleDTO);
    }

    @Put('/update/:id')
    async updateRoles(
         @Body() updateRoleDTO: UpdateRoleDto,
         @Param('id', ParseIntPipe) id: number
        )
        {
           await this.userRoleService.updateRole(id, updateRoleDTO);
          
        }

    @Delete('/delete/:id')
        async deleteRoles(id: number){
            await this.userRoleService.deleteRole(id);
        }

    @Get('/list')
        async getAllRoles(){
            return await this.userRoleService.getRolesList();
        }


}
