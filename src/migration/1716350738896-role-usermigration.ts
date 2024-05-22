import { MigrationInterface, QueryRunner } from "typeorm";

export class RoleUsermigration1716350738896 implements MigrationInterface {
    name = 'RoleUsermigration1716350738896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "role" character varying NOT NULL DEFAULT 'user'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
    }

}
