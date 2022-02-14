import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

interface IMaster {
  name: string;
  email: string;
}

@Controller('masters')
export class MasterController {
  @Get()
  getMasters() {
    return 'Masters';
  }

  @Get('/:masterId')
  getMasterById(@Param('masterId') masterId: string) {
    return `Master ${masterId}`;
  }

  @Post('/create')
  createMaster(@Body() master: IMaster) {
    return master;
  }
}
