import { Test, TestingModule } from '@nestjs/testing';
import { ScientistController } from './scientist.controller';

describe('ScientistController', () => {
  let controller: ScientistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScientistController],
    }).compile();

    controller = module.get<ScientistController>(ScientistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
