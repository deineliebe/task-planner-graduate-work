import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { tasksRepository } from '../repository/tasksRepository';
import { Tasks } from './entities/task.entity';
import { TaskDTO } from './dto/tasks.dto';

@Injectable()
export class TaskService {
  constructor(private readonly repository: tasksRepository) {}

  async getNewTasks(): Promise<Tasks[]> {
    const tasks = await this.repository.getNewTasks();
    return tasks;
  }

  async getHotTasks(): Promise<Tasks[]> {
    const tasks = await this.repository.getHotTasks();
    return tasks;
  }

  async getTasksByStatus(status: string): Promise<Tasks[]> {
    const tasks = await this.repository.getTasksByStatus(status);
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

  async addTask(task: TaskDTO) {
    return await this.repository.addTask(task);
  }

  async updateTaskNameById(id: string, name: string) {
    return await this.repository.updateTaskNameById(id, name);
  }

  async updateTaskDescriptionById(id: string, description: string) {
    return await this.repository.updateTaskDescriptionById(id, description);
  }

  async updateTaskStatusById(id: string, status: string) {
    return await this.repository.updateTaskStatusById(id, status);
  }

  async updateTaskDeadlineById(id: string, deadline: Date | null) {
    return await this.repository.updateTaskDeadlineById(id, deadline);
  }

  async deleteTask(id: string) {
    return await this.repository.deleteTask(id);
  }
}
