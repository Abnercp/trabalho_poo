import { Request,Response } from 'express'
import { ResponsaveisServices } from '../services/ResponsibleServices'

class ResponsaveisController {

    async create(request: Request, response: Response) {

        const { nomeDoResponsavel, telefone } = request.body
        const responsaveisServices = new ResponsaveisServices()

        try { 
            const responsaveis = await responsaveisServices.create({ nomeDoResponsavel, telefone })
            return response.json(responsaveis)
        } catch (err) {
            return response
                .status(400)
                .json({ message: err.message})
        }
    }
    async index(request: Request, response: Response) {
        const responsaveisServices = new ResponsaveisServices()

        try {
            const responsaveis = await responsaveisServices.index()
            return response.json(responsaveis)

        } catch (err) {
            return response 
                .status(400)
                .json({ message: err.message})
        }
    }
}

export { ResponsaveisController }