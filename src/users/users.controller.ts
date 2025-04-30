import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('users')
export class UsersController {
    constructor (private userService : UsersService){}

//create a user 
@Post('/create')
async creatUser(@Body() creatUserDto : CreateUserDto){

    return await this.userService.createUser(creatUserDto); 
}

//get all users details
@Get('/all')
async alluserDetails(){

    return await this.userService.allUser();
}

// get a  single user
@Get(':id')
async findAuser(@Param('id', ParseIntPipe) id:number){

    return await this.userService.getAUser(id);
}

}
