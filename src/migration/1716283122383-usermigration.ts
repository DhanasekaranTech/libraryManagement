import { MigrationInterface, QueryRunner } from "typeorm";

export class Usermigration1716283122383 implements MigrationInterface {
    name = 'Usermigration1716283122383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("userid" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_755ac9fbd440bc9b97fe9532108" PRIMARY KEY ("userid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
