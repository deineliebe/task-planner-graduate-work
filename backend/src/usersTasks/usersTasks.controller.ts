import { Controller, Body, Post } from '@nestjs/common';
import { UsersTasksService } from './usersTasks.service';
import { UserTasksDTO } from './dto/usersTasks.dto';

@Controller('/usersTasks')
export class UsersTasksController {
  constructor(private readonly userTasksService: UsersTasksService) {}

  @Post('/add')
  async create(@Body() data: UserTasksDTO) {
    return await this.userTasksService.addTask(data);
  }
}
