import { Gym } from '@prisma/client'
import { IGymsRepository } from '../IGyms-repository'

export class InMemoryGymsRepository implements IGymsRepository {
  public items: Gym[] = []

  async findById(id: string) {
    const gym = this.items.find((gym) => gym.id === id)
    return gym || null
  }

  async create(data: Gym) {
    const gym = data
    this.items.push(gym)
    return gym
  }
}
