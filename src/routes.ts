import { Router } from 'express'
import { DespesasController } from './controllers/ExpenseController'
import { ResponsaveisController } from './controllers/ResponsibleController'

const routes = Router()
const responsaveisController = new ResponsaveisController()
const despesasController = new DespesasController()

routes.post('/responsavel', responsaveisController.create)
routes.get('/responsavel', responsaveisController.index)

routes.post('/despesas', despesasController.create)
routes.get('/despesas', despesasController.index)
routes.get('/despesas/:id', despesasController.show)
routes.delete('/despesas/:id', despesasController.delete)
routes.put('/despesas/:id', despesasController.update)

export { routes }