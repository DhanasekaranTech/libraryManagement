import { MigrationInterface, QueryRunner } from "typeorm";

export class BookMigrationTable1716286303171 implements MigrationInterface {
    name = 'BookMigrationTable1716286303171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book" ("bookId" SERIAL NOT NULL, "bookName" character varying NOT NULL, CONSTRAINT "PK_dc3b1731d65c319e954cb621c1b" PRIMARY KEY ("bookId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "book"`);
    }

}
