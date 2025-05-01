import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { tasksRepository } from '../repository/tasksRepository';
import { Tasks } from './entities/task.entity';
import { TaskDTO, TaskFullDTO } from './dto/tasks.dto';

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

  async getLastTaskByName(name: string): Promise<Tasks[]> {
    const tasks = await this.repository.getLastTask(name);
    if (!tasks) {
      throw new NotFoundException(
        `Задача с именем ${name} не существует`,
      );
    }
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

  async addTask(task: TaskDTO) {
    return await this.repository.addTask(task);
  }

  async updateTask(task: TaskFullDTO) {
    return await this.repository.updateTask(task);
  }

  async deleteTask(id: number) {
    return await this.repository.deleteTask(id);
  }
}
