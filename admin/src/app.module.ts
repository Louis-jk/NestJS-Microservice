import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import config from './typeorm/config';
import { ProductController } from './product/product.controller';

@Module({
  imports: [ProductModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
