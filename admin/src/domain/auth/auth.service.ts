import { UserService } from '@domain/user/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: number): Promise<any> {
    const user = this.userService.findOne(email);
  }
}
