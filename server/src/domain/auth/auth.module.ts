import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '@domain/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStarategy } from './local.strategy';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStarategy],
})
export class AuthModule {}
