import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('masters')
export class MasterController {
  @Get()
  getMasters() {
    return 'Masters';
  }

  @Get('/:masterId')
  getMasterById(@Param() params) {
    return `Master ${params.id}`;
  }

  @Post('/create')
  createMaster(@Body() master) {
    return master;
  }
}
