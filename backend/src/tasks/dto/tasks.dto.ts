export class TaskDTO {
  name: string;
  description: string;
  status: string;
  deadline: Date | null;
  created_at: Date;
}

export class TaskFullDTO {
  id: number;
  name: string;
  description: string;
  status: string;
  deadline: Date | null;
  created_at: Date;
}
