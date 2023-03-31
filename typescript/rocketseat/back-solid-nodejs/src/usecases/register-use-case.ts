import { hash } from 'bcryptjs'
import { IUsersRepository } from '@/repositories/IUsers-repository'
import { UserAlreadyExists } from './erros/user-already-exists'

interface IUserProps {
  name: string
  email: string
  password: string
}

export class RegisterUser {
  constructor(private userRepository: IUsersRepository) {}

  async execute({ name, email, password }: IUserProps) {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.userRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExists()
    }

    await this.userRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
