import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('slaves')
class SlaveController {
  @Get()
  getSlaves() {
    return 'Slaves';
  }

  @Get('/:id')
  getSlaveById(@Param() params) {
    return `Slave ${params.id}`;
  }

  @Post('/create')
  createSlave(@Body() slave) {
    return slave;
  }

  @Put('/:id')
  updateSlave(@Body() slave) {
    return slave;
  }
}

export default SlaveController;
