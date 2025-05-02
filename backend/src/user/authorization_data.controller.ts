import { Controller, Body, Get, Put, Query } from '@nestjs/common';
import { UserService } from './authorization_data.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getDataByEmail')
  async findUserInfoByEmail(@Query('email') email: string, @Query('password') password: string) {
    return await this.userService.getUser(email, password);
  }

  @Put('/newPassword')
  async updatePassword(@Body() id: number, oldPassword: string, newPassword: string) {
    return await this.userService.updatePasswordById(id, oldPassword, newPassword);
  }
}
