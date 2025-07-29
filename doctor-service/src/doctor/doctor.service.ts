import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ClientGrpc } from '@nestjs/microservices';
import { first, firstValueFrom } from 'rxjs';
import { Doctor } from './doctor.entity';

interface PatientServiceGRPC {
  createPatient(data: {
    name: string;
    phone_number: string;
    doctor_id: number;
  });
  deletePatient(data: { id: number });
}
@Injectable()
export class DoctorService implements OnModuleInit {
  private patientService: PatientServiceGRPC;
  constructor(
    @InjectRepository(Doctor) private doctorRepo: Repository<Doctor>,
    @Inject('PATIENT_PACKAGE') private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.patientService =
      this.client.getService<PatientServiceGRPC>('PatientService');
  }
  // doctor create and delete only for admin
  async createDoctor(data: {
    name: string;
    email: string;
    phone_number: string;
  }) {
    const doctor = this.doctorRepo.create(data);
    return this.doctorRepo.save(doctor);
  }
  async deleteDoctor(data: { id: number }) {
    const doctor = this.doctorRepo.delete({ id: data.id });
  }
  //patient crud for admin and doctor

  async createPatient(data: {
    name: string;
    phone_number: string;
    doctor_id: number;
  }) {
    return firstValueFrom(this.patientService.createPatient(data));
  }
  async deletePatient(data: { id: number }) {
    return firstValueFrom(this.patientService.deletePatient(data));
  }
}
