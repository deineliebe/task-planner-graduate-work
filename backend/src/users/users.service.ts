import {
  Injectable,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { userRepository } from '../repository/userRepository';

@Injectable()
export class UserService {
  constructor(private readonly repository: userRepository) {}

  async getUser(email: string, password: string): Promise<User> {
    const userInfo = await this.repository.getUserByEmail(email, password);
    return userInfo;
  }

  async updateEmailById(id: number, email: string) {
    return await this.repository.updateEmailById(id, email);
  }

  async updatePasswordById(id: number, password: string) {
    return await this.repository.updateEmailById(id, password);
  }
}
