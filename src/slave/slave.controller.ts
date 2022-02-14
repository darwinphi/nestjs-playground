import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CreateSlaveDTO, UpdateSlaveDTO, SlaveResponseDTO } from './slave.dto';

@Controller('slaves')
export class SlaveController {
  @Get()
  getSlaves(): SlaveResponseDTO[] {
    return [{ id: '1', name: 'Darwin', master: 'God' }];
  }

  @Get('/:slaveId')
  getSlaveById(@Param('slaveId') slaveId: string): SlaveResponseDTO {
    return { id: slaveId, name: 'Darwin', master: 'God' };
  }

  @Post('/create')
  createSlave(@Body() slave: CreateSlaveDTO) {
    return slave;
  }

  @Put('/:slaveId')
  updateSlave(
    @Param('slaveId') slaveId: string,
    @Body() slave: UpdateSlaveDTO,
  ) {
    return `${slaveId}, ${JSON.stringify(slave)}`;
  }
}
