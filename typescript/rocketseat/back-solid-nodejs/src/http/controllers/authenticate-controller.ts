import { PrismaUsersRepository } from '@/repositories/prisma/users-repository'
import { AuthenticateUseCase } from '@/usecases/auth-use-case/authenticate-usecase'
import { InvalidCredentialsError } from '@/usecases/erros/invalid-credentials-error'
import { FastifyReply, FastifyRequest } from 'fastify'

import { z } from 'zod'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })
  const { email, password } = authenticateBodySchema.parse(request.body)
  try {
    const prismaUserRepository = new PrismaUsersRepository()
    const authenticateUseCase = new AuthenticateUseCase(prismaUserRepository)
    await authenticateUseCase.execute({ email, password })
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: error.message })
    }
    throw error
  }

  reply.status(200).send()
}
