import { Controller, Post, Body, Get, Query, Put, Delete } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { TaskDTO, TaskFullDTO } from './dto/tasks.dto';

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

  @Get('/last')
  async findLastTaskWithName(@Query('name') name: string) {
    return await this.taskService.getLastTaskByName(name);
  }

  @Post('/add')
  async create(@Body() task: TaskDTO) {
    return await this.taskService.addTask(task);
  }

  @Put('/update')
  async updateName(@Body() task: TaskFullDTO) {
    return await this.taskService.updateTask(task);
  }

  @Delete('/remove')
  async deleteTask(@Body() id: number) {
    return await this.taskService.deleteTask(id);
  }
}
