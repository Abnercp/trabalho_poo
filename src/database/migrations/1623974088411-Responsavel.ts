import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Responsavel1623974088411 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "responsaveis", 
                columns: [
                    {
                        name: "id",
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: "nomeDoResponsavel",
                        type: 'varchar',
                    },
                    {
                        name: "telefone",
                        type: 'number',
                    },
                    {
                        name: "created_at",
                        type: 'timestamp',
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: 'timestamp',
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('responsaveis')
    }
}
