import { Controller, Body, Post, Query } from '@nestjs/common';
import { UsersTasksService } from './usersTasks.service';
import { UserTasksDTO } from './dto/usersTasks.dto';

@Controller('/usersTasks')
export class UsersTasksController {
  constructor(private readonly userTasksService: UsersTasksService) {}

  @Post('/add')
  async create(@Body() data: UserTasksDTO) {
    return await this.userTasksService.addTask(data);
  }

  @Post('/delete')
  async delete(@Query() id: number) {
    return await this.userTasksService.deleteTask(id);
  }
}
