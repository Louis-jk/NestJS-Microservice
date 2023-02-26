import { IUser } from '../interface/user.interface';
export class CreateUserDto implements IUser {
  username: string;
  email: string;
  password: string;
  phone: string;
}

export class UpdateUserDto implements Partial<IUser> {}
