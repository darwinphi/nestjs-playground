import { Test, TestingModule } from '@nestjs/testing';
import SlaveController from './slave.controller';

describe('SlaveController', () => {
  let slaveController: SlaveController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SlaveController],
      providers: [],
    }).compile();

    slaveController = app.get<SlaveController>(SlaveController);
  });

  describe('root', () => {
    it('should return "Slaves"', () => {
      expect(slaveController.getSlaves()).toBe('Slaves');
    });
  });
});
