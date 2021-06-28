import { Repository, EntityRepository } from "typeorm"
import { Responsavel } from '../entities/Responsible'

@EntityRepository( Responsavel )
class ResponsaveisRepository extends Repository<Responsavel> {

}
export { ResponsaveisRepository }
