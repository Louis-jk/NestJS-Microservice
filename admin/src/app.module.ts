import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from '@domain/project/project.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@domain/user/user.module';
import * as dotenv from 'dotenv';
import { LoggerMiddleware } from '@middlewara/logger.middleware';
import { config as TypeOrmCofig } from '@infrastructure/config/typeorm/typeorm.config';

dotenv.config();
@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmCofig), ProjectModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
