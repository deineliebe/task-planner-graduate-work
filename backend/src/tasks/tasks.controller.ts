import { Controller, Post, Body, Get, Query, Put } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { TaskDTO } from './dto/tasks.dto';

@Controller('/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/new')
  async findNewTasks() {
    return await this.taskService.getNewTasks();
  }

  @Get('/hot')
  async findHotTasks() {
    return await this.taskService.getHotTasks();
  }

  @Get('/status')
  async findTasksByStatus(@Query() status: string) {
    return await this.taskService.getTasksByStatus(status);
  }

  @Post('/add')
  async create(@Body() task: TaskDTO) {
    return await this.taskService.addTask(task);
  }

  @Put('/newName')
  async updateName(@Body() id: number, name: string) {
    return await this.taskService.updateTaskNameById(id, name);
  }

  @Put('/newDescription')
  async updateDescription(@Body() id: number, name: string) {
    return await this.taskService.updateTaskNameById(id, name);
  }

  @Put('/newStatus')
  async updateStatus(@Body() id: number, name: string) {
    return await this.taskService.updateTaskNameById(id, name);
  }

  @Put('/newDeadline')
  async updateDeadline(@Body() id: number, name: string) {
    return await this.taskService.updateTaskNameById(id, name);
  }
}
