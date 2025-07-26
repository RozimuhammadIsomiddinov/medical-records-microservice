import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1753532199025 implements MigrationInterface {
  name = 'CreateUserTable1753532199025';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "doctors"  ("id" SERIAL NOT NULL,
            "name" character varying(100) NOT NULL, 
            "email" character varying(100) NOT NULL,
            "phone_number" character varying(20) NOT NULL, 
            "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
            "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
            CONSTRAINT "UQ_62069f52ebba471c91de5d59d61" UNIQUE ("email"), 
            CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "doctors"`);
  }
}
