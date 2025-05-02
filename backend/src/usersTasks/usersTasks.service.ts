import {
  Injectable,
} from '@nestjs/common';
import { UserTasksDTO } from './dto/usersTasks.dto';
import { usersTasksRepository } from '../repository/usersTasksRepository';

@Injectable()
export class UsersTasksService {
  constructor(private readonly repository: usersTasksRepository) {}
  
    async addTask(data: UserTasksDTO) {
      return await this.repository.addTask(data);
    }
  
    async deleteTask(id: number) {
      return await this.repository.deleteTask(id);
    }
}
