import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../infrastructure/entities/user/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(user: CreateUserDto): Promise<void> {
    await this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, user: UpdateUserDto): Promise<void> {
    await this.userRepository.update({ id }, user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
