import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePatientDto {
  @IsDefined({ message: 'name property mavjud bolishi shart' })
  @IsString()
  @IsNotEmpty({ message: 'name bosh bolmasligi kerak' })
  name: string;

  @IsDefined({ message: 'phone_number property mavjud bolishi shart' })
  @IsString()
  @IsNotEmpty({ message: 'phone_number bosh bolmasligi kerak' })
  phone_number: string;

  @IsDefined({ message: 'doctor_id property mavjud bolishi shart' })
  @IsNumber()
  @IsNotEmpty({ message: 'doctor_id bosh bolmasligi kerak' })
  doctor_id: number;
}
