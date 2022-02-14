import { Controller, Get, Put, Param } from '@nestjs/common';
import { SlaveResponseDTO } from '../slave/slave.dto';

@Controller('masters/:masterId/slaves')
export class SlaveMasterController {
  @Get()
  getSlaves(@Param('masterId') masterId: string): SlaveResponseDTO[] {
    return [{ id: '1', name: 'Darwin', master: 'God' }];
  }

  @Put('/:slaveId')
  updateSlaveMaster(
    @Param('masterId') masterId: string,
    @Param('slaveId') slaveId: string,
  ): SlaveResponseDTO {
    return { id: '1', name: 'Darwin', master: 'God' };
  }
}
