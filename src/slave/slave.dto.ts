export class CreateSlaveDTO {
  name: string;
  master: string;
}

export class UpdateSlaveDTO {
  name: string;
  master: string;
}

export class SlaveResponseDTO {
  id: string;
  name: string;
  master: string;
}
