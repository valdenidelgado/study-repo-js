import { hash } from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { PrismaUsersRepository } from '@/repositories/users-repository'

interface IUserProps {
  name: string
  email: string
  password: string
}

export async function registerUseCase({ name, email, password }: IUserProps) {
  const password_hash = await hash(password, 6)

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userWithSameEmail) {
    throw new Error('User already exists')
  }

  const prismaUsersRepository = new PrismaUsersRepository()

  const user = await prismaUsersRepository.create({
    name,
    email,
    password_hash,
  })

  return user
}
