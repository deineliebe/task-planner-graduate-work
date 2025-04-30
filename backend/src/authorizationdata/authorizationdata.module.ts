import { Module } from '@nestjs/common';
import { userRepository } from '../repository/userRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './authorizationdata.service';
import { UserController } from './authorizationdata.controller';
import { AuthorizationData } from './entities/authorizationdata.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorizationData])],
  controllers: [UserController],
  providers: [UserService, userRepository],
  exports: [UserService, userRepository],
})
export class UserModule {}
