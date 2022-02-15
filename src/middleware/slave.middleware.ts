import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { slaves } from '../database';

@Injectable()
export class SlaveMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('From middleware');
    const slaveId = req.params.slaveId;
    const slaveExists = slaves.some((slave) => slave.id === slaveId);

    if (!slaveExists) {
      throw new HttpException('Slave does not exists.', 400);
    }

    next();
  }
}
