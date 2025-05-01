import { Module } from '@nestjs/common';
import { userRepository } from '../repository/userRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './authorization_data.service';
import { UserController } from './authorization_data.controller';
import { AuthorizationData } from './entities/authorization_data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorizationData])],
  controllers: [UserController],
  providers: [UserService, userRepository],
  exports: [UserService, userRepository],
})
export class UserModule {}
