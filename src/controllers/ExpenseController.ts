import { Request, Response } from 'express'
import { DespesasServices } from '../services/ExpenseServices'

class DespesasController {
    async create(request: Request, response: Response) {

        const { dataDaCompra, localDaCompra, valor, idDoResponsavel} = request.body
        const despesasServices = new DespesasServices()

        try { 
            const despesas = await despesasServices.create({ 
                dataDaCompra, 
                localDaCompra, 
                valor, 
                idDoResponsavel
            })
            return response.json(despesas)
        } catch (err) {
            return response
                .status(400)
                .json({ message: err.message})
        }
    }
    async index(request: Request, response: Response) {

        const despesasServices = new DespesasServices()

        try { 
            const despesas = await despesasServices.index()
            return response.json(despesas)
            
        } catch (err) {
            return response
                .status(400)
                .json({ message: err.message})
        }
    }
    async show(request: Request, response: Response) {

        const despesasServices = new DespesasServices()
        const {id} = request.params

        try {
            const despesas = await despesasServices.show({id})
            return response.json(despesas)

        } catch (err) {
            return response
                .status(400)
                .json({ message: err.message})
        }
    }
    async delete(request: Request, response: Response) {

        const despesasServices = new DespesasServices()
        const {id} = request.params

        try {
            await despesasServices.delete({id})
            return response.json({message: 'id nao existe mais'})

        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }
    async update(request: Request, response: Response) {
        const despesasServices = new DespesasServices()
        const {id} = request.params
        const { dataDaCompra, localDaCompra, valor, idDoResponsavel} = request.body

        try {
            const despesas = await despesasServices.update(id,{
                dataDaCompra, 
                localDaCompra, 
                valor, 
                idDoResponsavel
            })
            return response.json(despesas)
        } catch (err) {
            return response  
                .status(400)
                .json({ message: err.message})
        }
    }
}
export { DespesasController }
