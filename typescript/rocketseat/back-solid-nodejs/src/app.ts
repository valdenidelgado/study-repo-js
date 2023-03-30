import fastify from 'fastify'
import { appRoutes } from './routes/user-routes'
export const app = fastify()
appRoutes(app)
