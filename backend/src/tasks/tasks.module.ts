import { Module } from '@nestjs/common';
import { tasksRepository } from '../repository/tasksRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './tasks.service';
import { TaskController } from './tasks.controller';
import { Tasks } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tasks])],
  controllers: [TaskController],
  providers: [TaskService, tasksRepository],
  exports: [TaskService, tasksRepository],
})
export class TaskModule {}
