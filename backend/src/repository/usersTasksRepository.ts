import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTasks } from '../usersTasks/entities/usersTasks.entity';
import { UserTasksDTO } from '../usersTasks/dto/usersTasks.dto';

@Injectable()
export class usersTasksRepository {
  constructor(
    @InjectRepository(UserTasks) private repository: Repository<UserTasks>) {}

    async addTask(data: UserTasksDTO) {
      return this.repository.query(`INSERT INTO user_tasks(user_id, task_id)
        VALUES ($1, $2);`, [data.user_id, data.task_id]);
    }
}
