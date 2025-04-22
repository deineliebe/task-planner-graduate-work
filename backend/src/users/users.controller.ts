import { Controller, Post, Body } from '@nestjs/common';
import { TaskService } from './users.service';
import { TaskDTO } from './dto/tasks.dto';

@Controller('/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/')
  async create(@Body() order: TaskDTO) {
    return await this.taskService.addOrder(order.tickets);
  }
}
