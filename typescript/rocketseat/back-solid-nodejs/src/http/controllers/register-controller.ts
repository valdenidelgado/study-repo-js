import { PrismaUsersRepository } from '@/repositories/prisma/users-repository'
import { UserAlreadyExists } from '@/usecases/erros/user-already-exists'
import { RegisterUser } from '@/usecases/register-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })
  const { name, email, password } = registerBodySchema.parse(request.body)
  try {
    const prismaUserRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUser(prismaUserRepository)
    await registerUseCase.execute({ name, email, password })
  } catch (error) {
    if (error instanceof UserAlreadyExists) {
      return reply.status(409).send({ message: error.message })
    }
    throw error
  }

  reply.status(201).send()
}
