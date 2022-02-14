import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MasterController } from './master/master.controller';
import { SlaveController } from './slave/slave.controller';
import { SlaveMasterController } from './master/slave.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    SlaveController,
    MasterController,
    SlaveMasterController,
  ],
  providers: [AppService],
})
export class AppModule {}
