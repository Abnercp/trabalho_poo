import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Despesas1623974102433 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "despesas", 
                columns: [
                    {
                        name: "id",
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: "dataDaCompra",
                        type: 'string',
                    },
                    {
                        name: "localDaCompra",
                        type: 'varchar',
                    },
                    {
                        name: "valor",
                        type: 'number',
                    },
                    {
                        name: "idDoResponsavel",
                        type: 'uuid',
                        isPrimary: true,
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
                ],
                foreignKeys: [
                    {
                      name: "FKResponsavel",
                      referencedTableName: "responsaveis",
                      referencedColumnNames: ["id"],
                      columnNames: ["idResponsavel"],
                      onDelete: "SET NULL",
                      onUpdate: "SET NULL",
                    }
          ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('despesas')
    }
}
