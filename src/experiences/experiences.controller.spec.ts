import { Test, TestingModule } from '@nestjs/testing'
import { ExperiencesController } from 'src/experiences/experiences.controller'

describe('Experiences Controller', () => {
  let controller: ExperiencesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExperiencesController]
    }).compile()

    controller = module.get<ExperiencesController>(ExperiencesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
