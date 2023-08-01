import { Test, TestingModule } from '@nestjs/testing'
import { ScientistService } from './scientist.service'

describe('ScientistService', () => {
  let service: ScientistService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScientistService],
    }).compile()

    service = module.get<ScientistService>(ScientistService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
