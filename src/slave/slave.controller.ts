import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CreateSlaveDTO, UpdateSlaveDTO, SlaveResponseDTO } from './slave.dto';
import { SlaveService } from './slave.service';

@Controller('slaves')
export class SlaveController {
  constructor(private slaveService: SlaveService) {}

  @Get()
  getSlaves(): SlaveResponseDTO[] {
    return this.slaveService.getSlaves();
  }

  @Get('/:slaveId')
  getSlaveById(@Param('slaveId') slaveId: string): SlaveResponseDTO {
    return this.slaveService.getSlaveById(slaveId);
  }

  @Post('/create')
  createSlave(@Body() slave: CreateSlaveDTO) {
    return this.slaveService.createSlave(slave);
  }

  @Put('/:slaveId')
  updateSlave(@Param('slaveId') slaveId: string, @Body() body: UpdateSlaveDTO) {
    return this.slaveService.updateSlave(body, slaveId);
  }
}
