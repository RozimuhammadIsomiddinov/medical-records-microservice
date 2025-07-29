import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientRepo: Repository<Patient>,
  ) {}

  async createPatient(data: {
    name: string;
    phone_number: string;
    doctor_id: number;
  }) {
    const patient = await this.patientRepo.create(data);
    return this.patientRepo.save(patient);
  }

  async findByIDPatient(id: number) {
    return this.patientRepo.findOneBy({ id });
  }

  async deletePatient(doctor_id: number, patient_id: number) {
    const doctorPatients = await this.patientRepo.find({
      where: { doctor_id },
    });
    if (!doctorPatients || doctorPatients.length === 0) {
      return 'not found doctor';
    }

    await this.patientRepo.delete({ id: patient_id });
  }
}
