import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PatientService } from './patient.service';
import { CreatePatientDto } from 'dto/create-patient.dto';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @GrpcMethod('PatientService', 'CreatePatientRequest')
  createPatientCont(dto: CreatePatientDto) {
    return this.patientService.createPatient(dto);
  }

  @GrpcMethod('PatientService', 'GetPatientRequest')
  getByIdPatientCont(data: { id: number }) {
    return this.patientService.findByIDPatient(data.id);
  }

  @GrpcMethod('PatientService', 'DeletePatientRequest')
  deletePatientCont(data: { doctor_id: number; patient_id: number }) {
    return this.patientService.deletePatient(data.doctor_id, data.patient_id);
  }
}
