import { Controller, Body, Get, Put, Query } from '@nestjs/common';
import { UserService } from './authorizationdata.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getDataByEmail')
  async findUserInfoByEmail(@Query() email: string, password: string) {
    return await this.userService.getUser(email, password);
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
