import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { SlaveMiddleware } from '../middleware/slave.middleware';
import { SlaveController } from './slave.controller';
import { SlaveService } from './slave.service';

@Module({
  controllers: [SlaveController],
  providers: [SlaveService],
  exports: [SlaveService],
})
export class SlaveModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SlaveMiddleware).forRoutes({
      path: 'slaves/:slaveId',
      method: RequestMethod.GET,
    });
    consumer.apply(SlaveMiddleware).forRoutes({
      path: 'slaves/:slaveId',
      method: RequestMethod.PUT,
    });
  }
}
