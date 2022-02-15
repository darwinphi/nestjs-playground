import { Injectable } from '@nestjs/common';
import { masters } from 'src/database';
import { MasterResponseDTO, CreateMasterDTO } from './master.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class MasterService {
  private masters = masters;

  getMasters(): MasterResponseDTO[] {
    return this.masters;
  }

  getMasterById(masterId): MasterResponseDTO {
    return this.masters.find((master) => master.id === masterId);
  }

  createMaster(master: CreateMasterDTO) {
    const newMaster = {
      id: uuid(),
      ...master,
    };

    this.masters.push(newMaster);
    return newMaster;
  }
}
