import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMasterDTO, MasterResponseDTO } from './master.dto';

@Controller('masters')
export class MasterController {
  @Get()
  getMasters(): MasterResponseDTO[] {
    return [{ id: '1', name: 'God' }];
  }

  @Get('/:masterId')
  getMasterById(@Param('masterId') masterId: string): MasterResponseDTO {
    return { id: masterId, name: 'God' };
  }

  @Post('/create')
  createMaster(@Body() master: CreateMasterDTO) {
    return master;
  }
}
