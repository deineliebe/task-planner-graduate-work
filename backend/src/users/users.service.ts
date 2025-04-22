import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { dbRepository } from '../repository/repository';
import { Tasks } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(private readonly repository: dbRepository) {}

  async getTasks(page): Promise<Tasks[]> {
    const tasks = await this.repository.getTasks();
    return tasks;
  }

  async getTaskById(id: string): Promise<Tasks> {
    const tasks = await this.repository.getTaskById(id);
    if (!tasks) {
      throw new NotFoundException(
        `Task with required id (${id}) doesn't exist in database`,
      );
    }
    return tasks;
  }
}
