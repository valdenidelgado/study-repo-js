import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym-usecase'

let gymRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Gym Use Case', () => {
  beforeEach(() => {
    gymRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymRepository)

    // gymRepository.items.push({
    //   id: 'gym-id',
    //   title: 'gym-title',
    //   description: 'gym-description',
    //   latitude: new Decimal(0),
    //   longitude: new Decimal(0),
    // })

    // vi.useFakeTimers()
  })

  // afterEach(() => {
  //   vi.useRealTimers()
  // })

  it('should be able create gym', async () => {
    // const { checkIn } = await sut.execute({
    //   gymId: 'gym-id',
    //   userId: 'user-id',
    //   userLatitude: 0,
    //   userLongitude: 0,
    // })

    const { gym } = await sut.execute({
      title: 'gym-title',
      description: null,
      latitude: -27.222633,
      longitude: -49.6455874,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
