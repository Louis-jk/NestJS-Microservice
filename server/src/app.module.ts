import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from '@domain/project/project.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@domain/user/user.module';
import { config as TypeOrmCofig } from '@infrastructure/config/typeorm/typeorm.config';
import { AuthModule } from '@domain/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmCofig),
    ProjectModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
