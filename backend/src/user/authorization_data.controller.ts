import { Controller, Body, Get, Put, Query } from '@nestjs/common';
import { UserService } from './authorization_data.service';
import { TUserPasswordData } from './dto/dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getDataByEmail')
  async findUserInfoByEmail(@Query('email') email: string, @Query('password') password: string) {
    return await this.userService.getUser(email, password);
  }

  @Put('/newPassword')
  async updatePassword(@Body() usedData: TUserPasswordData) {
    return await this.userService.updatePasswordById(usedData);
  }
}
