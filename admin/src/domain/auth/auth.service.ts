import { UserService } from '@domain/user/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);

    if (user && user.password === password) {
      const { username, password, ...rest } = user;
      return rest;
    }
  }
}
