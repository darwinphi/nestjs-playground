import { Controller, Get, Put, Param, ParseUUIDPipe } from '@nestjs/common';
import { SlaveResponseDTO } from '../slave/slave.dto';
import { SlaveService } from '../slave/slave.service';

@Controller('masters/:masterId/slaves')
export class SlaveMasterController {
  constructor(private slaveService: SlaveService) {}

  @Get()
  getSlaves(
    @Param('masterId', new ParseUUIDPipe()) masterId: string,
  ): SlaveResponseDTO[] {
    return this.slaveService.getSlavesByMasterId(masterId);
  }

  @Put('/:slaveId')
  updateSlaveMaster(
    @Param('masterId', new ParseUUIDPipe()) masterId: string,
    @Param('slaveId', new ParseUUIDPipe()) slaveId: string,
  ): SlaveResponseDTO {
    return this.slaveService.updateSlaveMaster(masterId, slaveId);
  }
}
