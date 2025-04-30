import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorizationData } from '../user/entities/authorizationdata.entity';

@Injectable()
export class userRepository {
  constructor(
    @InjectRepository(AuthorizationData) private repository: Repository<AuthorizationData>) {}

  async getUserByEmail(email: string, password: string): Promise<AuthorizationData> {
    return this.repository.findOneBy({
      email: email,
      password: password,
    });
  }

  async updateEmailById(id: number, email: string) {
    await this.repository.update({ id: id }, { email: email });
  }

  async updatePasswordById(id: number, password: string) {
    await this.repository.update({ id: id }, { password: password });
  }
}
