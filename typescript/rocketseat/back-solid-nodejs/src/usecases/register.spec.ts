import { describe, it, expect } from 'vitest'
import { RegisterUser } from './register-use-case'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-user-repository'
import { UserAlreadyExists } from './erros/user-already-exists'

describe('Register UseCase', () => {
  it('should hash user password upon registration', async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository()
    const registerUserCase = new RegisterUser(inMemoryUsersRepository)

    const { user } = await registerUserCase.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should hash user password upon registration', async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository()
    const registerUserCase = new RegisterUser(inMemoryUsersRepository)

    const { user } = await registerUserCase.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    const compareHash = await compare('123456', user.password_hash)
    expect(compareHash).toBe(true)
  })

  it('should not be able to register with same email', async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository()
    const registerUserCase = new RegisterUser(inMemoryUsersRepository)

    const email = 'johndoe@example.com'

    await registerUserCase.execute({
      name: 'John Doe',
      email,
      password: '123456',
    })

    await expect(() =>
      registerUserCase.execute({
        name: 'John Doe',
        email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExists)
  })
})
