import { Module } from '@nestjs/common';
import { SlaveModule } from 'src/slave/slave.module';
import { MasterController } from './master.controller';
import { MasterService } from './master.service';
import { SlaveMasterController } from './slave.controller';

@Module({
  imports: [SlaveModule],
  controllers: [MasterController, SlaveMasterController],
  providers: [MasterService],
})
export class MasterModule {}
