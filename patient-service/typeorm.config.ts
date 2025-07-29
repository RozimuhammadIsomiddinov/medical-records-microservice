import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Patient } from './src/patient/patient.entity';
dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

export default new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: 5432,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  logging: false,
  entities: [Patient],
  migrations: ['./src/migrations/*.ts'],
  subscribers: [],
});
