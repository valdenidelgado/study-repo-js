import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-user-repository'
import { describe, it, expect } from 'vitest'
import { AuthenticateUseCase } from './authenticate-usecase'
import { hash } from 'bcryptjs'
import { InvalidCredentialsError } from '../erros/invalid-credentials-error'

const makeSut = () => {
  const userRepository = new InMemoryUsersRepository()
  const sut = new AuthenticateUseCase(userRepository)
  return {
    sut,
    userRepository,
  }
}

describe('Authenticate Use Case', () => {
  it('should be able authenticate', async () => {
    const { sut, userRepository } = makeSut()

    await userRepository.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      email: 'john@doe.com',
      password: '123456',
    })

    expect(user).toBeDefined()
  })

  it('should not be able authenticate with wrong email', async () => {
    const { sut } = makeSut()

    expect(() =>
      sut.execute({
        email: 'john@doe.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should not be able authenticate with wrong password', async () => {
    const { sut, userRepository } = makeSut()

    await userRepository.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password_hash: await hash('123456', 6),
    })

    expect(() =>
      sut.execute({
        email: 'john@doe.com',
        password: '1233356',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
