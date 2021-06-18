import { getCustomRepository } from 'typeorm'
import { DespesasRepository } from '../repositories/ExpensesRepository'

interface IDespesasCreate {
    dataDaCompra: string, 
    localDaCompra: string, 
    valor: number,
    idDoResponsavel: string
}

interface IDespesasShow {
    id: string
}

interface IDespesasUpdate {
    dataDaCompra: string
    localDaCompra: string
    valor: number
    idDoResponsavel: string
}

class DespesasServices {
    async create({ dataDaCompra, localDaCompra, valor, idDoResponsavel }: IDespesasCreate) {

        const despesasRepository = getCustomRepository(DespesasRepository)

       const despesas = await despesasRepository.create({ 
           dataDaCompra, 
           localDaCompra, 
           valor, 
           idDoResponsavel  
        })

        await despesasRepository.save(despesas)        
        return despesas
    }

    async index() {

        const despesasRepository = getCustomRepository(DespesasRepository)

        const despesas = await despesasRepository.find({
            relations: ["responsavel"]
        })

        return despesas
    }

    async delete({id}: IDespesasShow) {

        const despesasRepository = getCustomRepository(DespesasRepository)

        const despesas = await despesasRepository.findOne({id})

        if(!despesas) {
            throw new Error('id não existe!')

        } return await despesasRepository.delete({id})
    }

    async show({id}: IDespesasShow) {

        const despesasRepository = getCustomRepository(DespesasRepository)

        const despesas = await despesasRepository.findOne(id,{
            relations: ["responsavel"]
        })
         
        if(!despesas) {
            throw new Error('id não existe')
        }
        return despesas
    }

    async update(id, {dataDaCompra, localDaCompra, valor, idDoResponsavel}: IDespesasUpdate) {
        const despesasRepository = getCustomRepository(DespesasRepository)
        let despesas = await despesasRepository.findOne({id})

        if(!despesas) {
            throw new Error('id não existe!')
        }

        await despesasRepository.update(id, {
            dataDaCompra, 
            localDaCompra, 
            valor, 
            idDoResponsavel
        })

        despesas = await despesasRepository.findOne({})

        return despesas
    }

}

export { DespesasServices }