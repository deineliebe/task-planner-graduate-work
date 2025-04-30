import { Status } from "../entities/status.entity";

export class TaskDTO {
  name: string;
  description: string;
  status: Status;
  deadline: Date | null;
  created_at: Date;
}
