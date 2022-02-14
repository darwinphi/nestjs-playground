import { Controller, Get, Put, Param, Body } from '@nestjs/common';

@Controller('masters/:masterId/slaves')
export class SlaveMasterController {
  @Get()
  getSlaves(@Param('masterId') masterId: string) {
    return `Slaves from Master ${masterId}`;
  }

  @Put('/:slaveId')
  updateSlaveMaster(
    @Param('masterId') masterId: string,
    @Param('slaveId') slaveId: string,
  ) {
    return `Update Master #${masterId} Slave #${slaveId}`;
  }
}
