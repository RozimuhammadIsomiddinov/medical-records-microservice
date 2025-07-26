import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePatientTable1753534873777 implements MigrationInterface {
  name = 'CreatePatientTable1753534873777';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "patients" (
            "id" SERIAL NOT NULL, 
            "name" character varying(100) NOT NULL, 
            "phone_number" character varying(20) NOT NULL, 
            "doctor_id" integer NOT NULL, 
            "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
            "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
            CONSTRAINT "PK_a7f0b9fcbb3469d5ec0b0aceaa7" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "patients"`);
  }
}
