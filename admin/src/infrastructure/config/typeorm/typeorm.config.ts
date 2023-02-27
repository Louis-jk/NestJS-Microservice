import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

const isDev = process.env.NODE_ENV === 'local';
dotenv.config({ path: `./env/${isDev ? 'local' : 'prod'}.env` });

export const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + './../../**/*.entity{.ts,.js}'],
  synchronize: false,
  timezone: 'Asia/Seoul',
};
