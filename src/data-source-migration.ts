import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';
import { createUsersTable1678330845915 } from './migration/1678330845915-create-users-table';
import { createRolesTable1678330869083 } from './migration/1678330869083-create-roles-table';
import { createUserRolesTable1678330894146 } from './migration/1678330894146-create-user-roles-table';
import { insertRoles1678330926630 } from './migration/1678330926630-insert-roles';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: false,
  migrations: [
    createUsersTable1678330845915,
    createRolesTable1678330869083,
    createUserRolesTable1678330894146,
    insertRoles1678330926630,
  ],
  subscribers: [],
});
