import { Controller, Get, Put, Param } from '@nestjs/common';
import { SlaveResponseDTO } from '../slave/slave.dto';
import { SlaveService } from '../slave/slave.service';

@Controller('masters/:masterId/slaves')
export class SlaveMasterController {
  constructor(private slaveService: SlaveService) {}

  @Get()
  getSlaves(@Param('masterId') masterId: string): SlaveResponseDTO[] {
    return this.slaveService.getSlavesByMasterId(masterId);
  }

  @Put('/:slaveId')
  updateSlaveMaster(
    @Param('masterId') masterId: string,
    @Param('slaveId') slaveId: string,
  ): SlaveResponseDTO {
    return this.slaveService.updateSlaveMaster(masterId, slaveId);
  }
}
