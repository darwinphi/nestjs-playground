import { SlaveMiddleware } from './slave.middleware';

describe('SlaveMiddleware', () => {
  it('should be defined', () => {
    expect(new SlaveMiddleware()).toBeDefined();
  });
});
