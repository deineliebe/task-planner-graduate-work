import { Module } from '@nestjs/common';
import { dbRepository } from '../repository/repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './users.service';
import { TaskController } from './users.controller';
import { Tasks } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tasks])],
  controllers: [TaskController],
  providers: [TaskService, dbRepository],
  exports: [TaskService, dbRepository],
})
export class TaskModule {}
