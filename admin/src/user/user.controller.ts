import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private userSevice: UserService) {}

  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    return this.userSevice.createUser(newUser);
  }

  @Get()
  getUsers() {
    return this.userSevice.getUsers();
  }
}
