import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsertypesService } from './usertypes.service';
import { AssignUserTypeDto } from './dto/assign-usertype-dto';
import { UnAssignUserTypeDto } from './dto/unassign-usertype-dto';

@Controller('usertypes')
export class UsertypesController {

    constructor(private usertypesService: UsertypesService) { }

    @Get('/list')
    async getlist() {
        return await this.usertypesService.userTypesList();
    }

    @Post('/assign')
    async assignUsertype(
        @Body() assignDto: AssignUserTypeDto
    ) {
        await this.usertypesService.assignUserType(assignDto);
    }

    @Post('/unassign')
    async unassignUsertype(
        @Body() unassignDto: UnAssignUserTypeDto
    ) {
        await this.usertypesService.unassignUserType(unassignDto);
    }


}
