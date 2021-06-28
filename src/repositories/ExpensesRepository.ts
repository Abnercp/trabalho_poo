import { Repository, EntityRepository } from "typeorm"
import { Expense } from '../entities/Expenses'

@EntityRepository( Expense )
class DespesasRepository extends Repository<Expense> {

}
export { DespesasRepository }
