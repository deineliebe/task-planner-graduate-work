import { Module } from '@nestjs/common';
import { userRepository } from '../repository/userRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, userRepository],
  exports: [UserService, userRepository],
})
export class UserModule {}
