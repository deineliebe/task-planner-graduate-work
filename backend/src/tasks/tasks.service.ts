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

  async getNewTasks(id: number): Promise<Tasks[]> {
    const tasks = await this.repository.getNewTasks(id);
    return tasks;
  }

  async getHotTasks(id: number): Promise<Tasks[]> {
    const tasks = await this.repository.getHotTasks(id);
    return tasks;
  }

  async getTasksByStatus(id: number, status: string): Promise<Tasks[]> {
    const tasks = await this.repository.getTasksByStatus(id, status);
    return tasks;
  }

  async getTaskById(id: number): Promise<Tasks> {
    const tasks = await this.repository.getTaskById(id);
    if (!tasks) {
      throw new NotFoundException(
        `Задача с id ${id}) не существует`,
      );
    }
    return tasks;
  }

  async getLastTaskByName(name: string): Promise<Tasks[]> {
    const tasks = await this.repository.getLastTask(name);
    if (!tasks) {
      throw new NotFoundException(
        `Задача с именем ${name} не существует`,
      );
    }
    return tasks;
  }

  async addTask(task: TaskDTO) {
    return await this.repository.addTask(task);
  }

  async updateTaskNameById(id: number, name: string) {
    return await this.repository.updateTaskNameById(id, name);
  }

  async updateTaskDescriptionById(id: number, description: string) {
    return await this.repository.updateTaskDescriptionById(id, description);
  }

  async updateTaskStatusById(id: number, status: string) {
    return await this.repository.updateTaskStatusById(id, status);
  }

  async updateTaskDeadlineById(id: number, deadline: Date | null) {
    return await this.repository.updateTaskDeadlineById(id, deadline);
  }

  async deleteTask(id: number) {
    return await this.repository.deleteTask(id);
  }
}
