import { Injectable } from '@nestjs/common';
import { slaves } from '../database';
import { SlaveResponseDTO, CreateSlaveDTO, UpdateSlaveDTO } from './slave.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class SlaveService {
  private slaves = slaves;

  getSlaves(): SlaveResponseDTO[] {
    return this.slaves;
  }

  getSlaveById(slaveId): SlaveResponseDTO {
    return this.slaves.find((slave) => slave.id === slaveId);
  }

  createSlave(slave: CreateSlaveDTO): SlaveResponseDTO {
    const newSlave = {
      id: uuid(),
      ...slave,
    };

    this.slaves.push(newSlave);
    return newSlave;
  }

  updateSlave(body: UpdateSlaveDTO, slaveId: string): SlaveResponseDTO {
    let updatedSlave: SlaveResponseDTO;

    const updatedSlaves = this.slaves.map((slave) => {
      if (slave.id === slaveId) {
        updatedSlave = {
          id: slaveId,
          ...body,
        };
        return updatedSlave;
      } else {
        return slave;
      }
    });

    this.slaves = updatedSlaves;
    return updatedSlave;
  }
}
