import { Controller, Get, Put, Param, Body } from '@nestjs/common';

@Controller('masters/:masterId/slaves')
export class MasterController {
  @Get()
  getSlaves(@Param() params) {
    return `Slaves from Master`;
  }

  @Put('/:slaveId')
  updateSlaveMaster(@Body() master) {
    return master;
  }
}
