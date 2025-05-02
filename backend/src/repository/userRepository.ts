import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorizationData } from '../user/entities/authorization_data.entity';
import { TUserPasswordData } from '../user/dto/dto';

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

  async updatePasswordById(usedData: TUserPasswordData) {
    await this.repository.query(`UPDATE authorization_data SET password = $1 WHERE id::integer = $2 AND password = $3`, [usedData.newPassword, usedData.id, usedData.oldPassword]);
  }
}
