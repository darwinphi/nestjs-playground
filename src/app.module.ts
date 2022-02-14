import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MasterController } from './master/master.controller';
import { SlaveController } from './slave/slave.controller';

@Module({
  imports: [],
  controllers: [AppController, SlaveController, MasterController],
  providers: [AppService],
})
export class AppModule {}
