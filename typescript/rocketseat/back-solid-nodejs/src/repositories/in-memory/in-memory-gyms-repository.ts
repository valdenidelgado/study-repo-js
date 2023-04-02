import { Gym, Prisma } from '@prisma/client'
import { IGymsRepository } from '../IGyms-repository'
import { randomUUID } from 'crypto'

export class InMemoryGymsRepository implements IGymsRepository {
  public items: Gym[] = []

  async findById(id: string) {
    const gym = this.items.find((gym) => gym.id === id)
    return gym || null
  }

  async create(data: Prisma.GymCreateInput) {
    const gyn = {
      id: data.id ?? randomUUID(),
      title: data.title,
      description: data.description ?? null,
      latitude: new Prisma.Decimal(data.latitude.toString()),
      longitude: new Prisma.Decimal(data.longitude.toString()),
    }

    this.items.push(gyn)

    return gyn
  }
}
