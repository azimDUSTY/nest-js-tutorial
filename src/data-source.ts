import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';
import { join } from 'path';
import { User } from './users/user.entity';
import { Role } from './auth/role.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: false,
  // entities: [join(__dirname, '**', '*.entity.{ts, js}')],
  entities: [User, Role],
  subscribers: [],
});
