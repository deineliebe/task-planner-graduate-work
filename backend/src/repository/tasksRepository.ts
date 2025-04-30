import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from '../tasks/entities/task.entity';
import { TaskDTO } from '../tasks/dto/tasks.dto';

@Injectable()
export class tasksRepository {
  constructor(
    @InjectRepository(Tasks) private repository: Repository<Tasks>) {}

  async getNewTasks(userId: number): Promise<Tasks[]> {
    return this.repository.query(`SELECT user_id, id, name, description, deadline, created_at, status
      FROM userTasks LEFT JOIN tasks
      ON userTasks.task_id = tasks.id
      WHERE user_id = $1
      ORDER BY created_at DESC;`, [userId]);
  }

  async getHotTasks(userId: number): Promise<Tasks[]> {
    return this.repository.query(`SELECT user_id, id, name, description, deadline, created_at, status
      FROM userTasks LEFT JOIN tasks
      ON userTasks.task_id = tasks.id
      WHERE user_id = ${userId} AND deadline >= CURRENT_DATE
      ORDER BY deadline ASC;`);
  }

  async getTasksByStatus(userId: number, status: string): Promise<Tasks[]> {
    return this.repository.query(`SELECT user_id, id, name, description, deadline, created_at, status
      FROM userTasks LEFT JOIN tasks
      ON userTasks.task_id = tasks.id
      WHERE user_id = ${userId} AND status = ${status}
      ORDER BY created_at DESC;`);
  }

  async addTask(task: TaskDTO) {
    return this.repository.create(task);
  }

  async getTaskById(id: number): Promise<Tasks> {
    return this.repository.findOne({
      where: { id: id }
    });
  }

  async updateTaskNameById(id: number, name: string) {
    await this.repository.update({ id: id }, { name: name });
  }

  async updateTaskDescriptionById(id: number, description: string) {
    await this.repository.update({ id: id }, { description: description });
  }

  async updateTaskStatusById(id: number, status: string) {
    await this.repository.update({ id: id }, { status: status });
  }

  async updateTaskDeadlineById(id: number, deadline: Date | null) {
    await this.repository.update({ id: id }, { deadline: deadline });
  }

  async deleteTask(id: number) {
    await this.repository.delete({ id: id });
  }
}
