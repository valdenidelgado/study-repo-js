import { listAll } from '@/http/controllers/findAll-controller'
import { register } from '@/http/controllers/register-controller'
import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.get('/users', listAll)
  app.post('/users', register)
}
