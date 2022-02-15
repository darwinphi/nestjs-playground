import { Module } from '@nestjs/common';
import { SlaveModule } from './slave/slave.module';
import { MasterModule } from './master/master.module';

@Module({
  imports: [SlaveModule, MasterModule],
})
export class AppModule {}
