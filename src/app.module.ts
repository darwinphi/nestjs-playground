import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MasterController } from './master/master.controller';
import { SlaveController } from './slave/slave.controller';
import { SlaveMasterController } from './master/slave.controller';
import { SlaveService } from './slave/slave.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    SlaveController,
    MasterController,
    SlaveMasterController,
  ],
  providers: [AppService, SlaveService],
})
export class AppModule {}
