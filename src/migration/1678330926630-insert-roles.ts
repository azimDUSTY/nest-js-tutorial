import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertRoles1678330926630 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            INSERT INTO roles (name) values ('user');
        `);
    queryRunner.query(`
        INSERT INTO roles (name) values ('moderator');
    `);
    queryRunner.query(`
            INSERT INTO roles (name) values ('admin');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
