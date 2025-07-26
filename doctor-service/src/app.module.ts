import { Module } from '@nestjs/common';
import { DoctorModule } from './doctor/doctor.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as dotenv from 'dotenv';
dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: 5432,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      synchronize: false,
      autoLoadEntities: true,
    }),
    DoctorModule,
  ],
})
export class AppModule {}
