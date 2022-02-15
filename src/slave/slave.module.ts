import { Module } from '@nestjs/common';
import { SlaveController } from './slave.controller';
import { SlaveService } from './slave.service';

@Module({
  controllers: [SlaveController],
  providers: [SlaveService],
  exports: [SlaveService],
})
export class SlaveModule {}
