import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Product } from 'src/product/product.entity';

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  port: 3306,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Product],
  synchronize: true,
  autoLoadEntities: true,
  charset: 'utf8mb4',
  logging: true,
  keepConnectionAlive: true,
};

export = config;
