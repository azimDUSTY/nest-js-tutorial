import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUserRolesTable1678330894146 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE user_roles (
        id bigint NOT NULL AUTO_INCREMENT,
        user_id bigint DEFAULT NULL,
        role_id bigint DEFAULT NULL,
        created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp NULL DEFAULT NULL,
        deleted_at timestamp NULL DEFAULT NULL,
        PRIMARY KEY (id)
      );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE user_roles;`);
  }
}
