import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
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

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userSevice.getUser(id);
  }
}
