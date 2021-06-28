import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, JoinColumn, ManyToOne} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Responsavel } from './Responsible';

@Entity('despesas')
class Expense {
    @PrimaryColumn()
    id: string;

    @Column()
    dataDaCompra: string;

    @Column()
    localDaCompra: string;

    @Column()
    valor: number;

    @Column()
    idDoResponsavel: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @JoinColumn({name: 'idDoResponsavel'})
    @ManyToOne(() => Responsavel) 
    responsavel: Responsavel

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export { Expense }