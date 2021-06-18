import { Repository, EntityRepository } from "typeorm"
import { Responsavel } from '../entitites/Responsible'

@EntityRepository( Responsavel )
class ResponsaveisRepository extends Repository<Responsavel> {

}
export { ResponsaveisRepository }