import { Controller, Post, Body, Get, Query, Put } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { TaskDTO } from './dto/tasks.dto';

@Controller('/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/new')
  async findNewTasks(@Query('id') id: number) {
    return await this.taskService.getNewTasks(id);
  }

  @Get('/hot')
  async findHotTasks(@Query('id') id: number) {
    return await this.taskService.getHotTasks(id);
  }

  @Get('/status')
  async findTasksByStatus(@Query('id') id: number, @Query('status') status: string) {
    return await this.taskService.getTasksByStatus(id, status);
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
  async updateDescription(@Body() id: number, description: string) {
    return await this.taskService.updateTaskNameById(id, description);
  }

  @Put('/newStatus')
  async updateStatus(@Body() id: number, status: string) {
    return await this.taskService.updateTaskNameById(id, status);
  }

  @Put('/newDeadline')
  async updateDeadline(@Body() id: number, name: string) {
    return await this.taskService.updateTaskNameById(id, name);
  }
}
