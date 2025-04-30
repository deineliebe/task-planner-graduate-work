import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class userRepository {
  constructor(
    @InjectRepository(User) private repository: Repository<User>) {}

  async getUserByEmail(email: string): Promise<User> {
    return this.repository.findOneBy({
      email: email,
    });
  }

  async updateEmailById(id: number, email: string) {
    await this.repository.update({ id: id }, { email: email });
  }

  async updatePasswordById(id: number, password: string) {
    await this.repository.update({ id: id }, { password: password });
  }
}
