import { Module } from '@nestjs/common';
import { dbRepository } from '../repository/repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './tasks.service';
import { TaskController } from './tasks.controller';
import { Tasks } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tasks])],
  controllers: [TaskController],
  providers: [TaskService, dbRepository],
  exports: [TaskService, dbRepository],
})
export class TaskModule {}
