import { PrismaUsersRepository } from '@/repositories/prisma/users-repository'
import { RegisterUser } from '../register-use-case'

export function makeRegisterUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUser(prismaUsersRepository)
  return registerUseCase
}
