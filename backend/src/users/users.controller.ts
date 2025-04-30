import { Controller, Body, Get, Put } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getDataByEmail')
  async findUserInfoByEmail(email: string) {
    return await this.userService.getUser(email);
  }

  @Put('/newEmail')
  async updateEmail(@Body() id: number, email: string) {
    return await this.userService.updateEmailById(id, email);
  }

  @Put('/newPassword')
  async updatePassword(@Body() id: number, password: string) {
    return await this.userService.updatePasswordById(id, password);
  }
}
