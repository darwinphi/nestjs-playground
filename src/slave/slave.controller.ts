import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

interface ISlave {
  name: string;
  email: string;
}

@Controller('slaves')
export class SlaveController {
  @Get()
  getSlaves() {
    return 'Slaves';
  }

  @Get('/:slaveId')
  getSlaveById(@Param('slaveId') slaveId: string) {
    return `Slave #${slaveId}`;
  }

  @Post('/create')
  createSlave(@Body() slave: ISlave) {
    return slave;
  }

  @Put('/:slaveId')
  updateSlave(@Param('slaveId') slaveId: string, @Body() slave: ISlave) {
    return `${slaveId}, ${JSON.stringify(slave)}`;
  }
}
