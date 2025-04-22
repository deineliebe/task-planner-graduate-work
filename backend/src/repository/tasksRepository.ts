import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from '../tasks/entities/task.entity';
import { TaskDTO } from '../tasks/dto/tasks.dto';

@Injectable()
export class dbRepository {
  constructor(
    @InjectRepository(Tasks) private repository: Repository<Tasks>) {}

  async getNewTasks(): Promise<Tasks[]> {
    return this.repository.find({
      order: {
        createdAt: "DESC",
      },
    });
  }

  async getHotTasks(): Promise<Tasks[]> {
    return this.repository.find({
      order: {
        deadline: "DESC",
      },
    });
  }

  async getTasksByStatus(status: string): Promise<Tasks[]> {
    return this.repository.find({
      where: {
        status: status,
      },
    });
  }

  async addTask(task: TaskDTO) {
    return this.repository.create(task);
  }

  async getTaskById(id: string): Promise<Tasks> {
    return this.repository.findOne({
      where: { id: id }
    });
  }

  async updateTaskNameById(id: string, name: string) {
    await this.repository.update({ id: id }, { name: name });
  }

  async updateTaskDescriptionById(id: string, description: string) {
    await this.repository.update({ id: id }, { description: description });
  }

  async updateTaskStatusById(id: string, status: string) {
    await this.repository.update({ id: id }, { status: status });
  }

  async updateTaskDeadlineById(id: string, deadline: Date | null) {
    await this.repository.update({ id: id }, { deadline: deadline });
  }

  async deleteTask(id: string) {
    await this.repository.delete({ id: id });
  }
}
