import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMasterDTO, MasterResponseDTO } from './master.dto';
import { MasterService } from './master.service';

@Controller('masters')
export class MasterController {
  constructor(private masterService: MasterService) {}

  @Get()
  getMasters(): MasterResponseDTO[] {
    return this.masterService.getMasters();
  }

  @Get('/:masterId')
  getMasterById(@Param('masterId') masterId: string): MasterResponseDTO {
    return this.masterService.getMasterById(masterId);
  }

  @Post('/create')
  createMaster(@Body() master: CreateMasterDTO) {
    return this.masterService.createMaster(master);
  }
}
