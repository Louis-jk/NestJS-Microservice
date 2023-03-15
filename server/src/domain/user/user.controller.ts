import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from '@infrastructure/entities/user/user.entity';

@Controller('users')
export class UserController {
  constructor(private userSevice: UserService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() newUser: CreateUserDto): Promise<void> {
    return this.userSevice.create(newUser);
  }

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userSevice.findAll();
  }

  @Get(':email')
  getUser(@Param('email') email: string): Promise<User> {
    return this.userSevice.findOne(email);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ): Promise<void> {
    return this.userSevice.update(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.userSevice.remove(id);
  }
}
