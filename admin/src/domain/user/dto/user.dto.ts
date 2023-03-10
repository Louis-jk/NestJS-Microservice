import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { IUser } from '../interface/user.interface';
import { CreateAddressDto } from './address.dto';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
export class CreateUserDto implements IUser {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNumberString()
  @IsNotEmpty()
  phone: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
