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
    return this.repository.query(`SELECT task_id AS id, name, description, deadline, created_at, status
      FROM user_tasks INNER JOIN tasks
      ON user_tasks.task_id = tasks.id
      WHERE user_id = $1
      ORDER BY created_at DESC;`, [userId]);
  }

  async getHotTasks(userId: number): Promise<Tasks[]> {
    return this.repository.query(`SELECT task_id AS id, name, description, deadline, created_at, status
      FROM user_tasks INNER JOIN tasks
      ON user_tasks.task_id = tasks.id
      WHERE user_id = $1 AND deadline >= CURRENT_DATE
      ORDER BY deadline ASC;`, [userId]);
  }

  async getTasksByStatus(userId: number, status: string): Promise<Tasks[]> {
    return this.repository.query(`SELECT task_id AS id, name, description, deadline, created_at, status
      FROM user_tasks INNER JOIN tasks
      ON user_tasks.task_id = tasks.id
      WHERE user_id = $1 AND status = $2
      ORDER BY created_at DESC;`, [userId, status]);
  }

  async addTask(task: TaskDTO) {
    return this.repository.query(`INSERT INTO tasks(name, description, deadline, created_at, status)
      VALUES ($1, $2, $3, $4, $5);`, [task.name, task.description || null, task.deadline || null, task.created_at, task.status]);
  }

  async getTaskById(id: number): Promise<Tasks> {
    return this.repository.findOne({
      where: { id: id }
    });
  }

  async getLastTask(name: string): Promise<Tasks[]> {
    return this.repository.find({
      where: { name : name },
      order: {'created_at': 'DESC'},
      skip: 0,
      take: 1,
    });
  }

  async updateTask(task: Tasks) {
    await this.repository.save(task);
  }

  async deleteTask(id: number) {
    await this.repository.delete({ id: id });
  }
}
