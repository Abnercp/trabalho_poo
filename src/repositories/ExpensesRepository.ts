import { Repository, EntityRepository } from "typeorm"
import { Expense } from '../entitites/Expenses'

@EntityRepository( Expense )
class DespesasRepository extends Repository<Expense> {

}
export { DespesasRepository }