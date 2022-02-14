import { Test, TestingModule } from '@nestjs/testing';
import { SlaveService } from './slave.service';

describe('SlaveService', () => {
  let service: SlaveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlaveService],
    }).compile();

    service = module.get<SlaveService>(SlaveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
