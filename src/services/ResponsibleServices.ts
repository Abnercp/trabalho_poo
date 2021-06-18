import { ResponsaveisRepository } from '../repositories/ResponsibleRepository'
import { getCustomRepository } from 'typeorm'

interface IResponsaveisCreate {
    nomeDoResponsavel: string
    telefone: number
}

class ResponsaveisServices {
    async create({nomeDoResponsavel, telefone}: IResponsaveisCreate) {

        const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

        const responsaveis = responsaveisRepository.create({
            nomeDoResponsavel,
            telefone
        })

        await responsaveisRepository.save(responsaveis)

        return responsaveis
    } 
    
    async index() {
        const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

        const responsaveis = await responsaveisRepository.find()

        return responsaveis
    }

}

export { ResponsaveisServices }