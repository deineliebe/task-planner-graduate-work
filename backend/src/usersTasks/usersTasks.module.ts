import { Module } from '@nestjs/common';
import { usersTasksRepository } from '../repository/usersTasksRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersTasksService } from './usersTasks.service';
import { UsersTasksController } from './usersTasks.controller';
import { UserTasks } from './entities/usersTasks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTasks])],
  controllers: [UsersTasksController],
  providers: [UsersTasksService, usersTasksRepository],
  exports: [UsersTasksService, usersTasksRepository],
})
export class UsersTasksModule {}
