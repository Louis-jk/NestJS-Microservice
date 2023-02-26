import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';

@Controller('users')
export class UserController {
  constructor(private userSevice: UserService) {}

  @Post()
  createUser(@Body() newUser: CreateUserDto): Promise<void> {
    return this.userSevice.create(newUser);
  }

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userSevice.findAll();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userSevice.findOne(id);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.userSevice.remove(id);
  }
}
