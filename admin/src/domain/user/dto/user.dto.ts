import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';
import { IUser } from '../interface/user.interface';
export class CreateUserDto implements IUser {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNumberString()
  phone: string;
}

export class UpdateUserDto implements Partial<IUser> {}
