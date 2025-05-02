import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { userRepository } from '../repository/userRepository';
import { AuthorizationData } from './entities/authorization_data.entity';
import { TUserPasswordData } from './dto/dto';

@Injectable()
export class UserService {
  constructor(private readonly repository: userRepository) {}

  async getUser(email: string, password: string): Promise<AuthorizationData> {
    const userInfo = await this.repository.getUserByEmail(email, password);
    if (!userInfo) throw new BadRequestException('Пользователь с данным логином и/или паролем не найден');
    return userInfo;
  }

  async updatePasswordById(usedData: TUserPasswordData) {
    return await this.repository.updatePasswordById(usedData);
  }
}
