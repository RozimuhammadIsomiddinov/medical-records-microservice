import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientController } from './patient/patient.controller';
import { PatientModule } from './patient/patient.module';

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
    PatientModule,
  ],
  controllers: [PatientController],
})
export class AppModule {}
