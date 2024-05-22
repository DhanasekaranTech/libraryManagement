import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate11716290689712 implements MigrationInterface {
    name = 'Migrate11716290689712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book" ("bookId" uuid NOT NULL DEFAULT uuid_generate_v4(), "bookName" character varying NOT NULL, CONSTRAINT "PK_dc3b1731d65c319e954cb621c1b" PRIMARY KEY ("bookId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "book"`);
    }

}
