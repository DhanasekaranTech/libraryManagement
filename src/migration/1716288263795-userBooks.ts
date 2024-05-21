import { MigrationInterface, QueryRunner } from "typeorm";

export class UserBooks1716288263795 implements MigrationInterface {
    name = 'UserBooks1716288263795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_book" ("UB_ID" SERIAL NOT NULL, "bookName" character varying NOT NULL, "userId" integer NOT NULL, "userName" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_1a1346d5205adae0f203e4b7408" PRIMARY KEY ("UB_ID"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_book"`);
    }

}
