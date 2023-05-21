import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { Users } from '../../models/user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.usersService.findAll();
  }
  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<any> {
    return this.usersService.findOne(id);
  }
  @Post()
  addUsers(@Body() users: Users) {
    return this.usersService.addUser(users);
  }

  @Post('/login')
  login(
    @Body('email_user') email_user: string,
    @Body('password') password: string,
  ) {
    return this.usersService.login(email_user, password);
  }
  // @Patch()
  // updateUser() {
  //   return this.appService.updateUser();
  // }
  // @Delete()
  // deleteUser() {
  //   return this.appService.deleteUser();
  // }
}
