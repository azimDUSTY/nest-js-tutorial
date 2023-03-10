import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  /**
   * Get all user
   * @returns array of user objects
   */
  @Get()
  async users() {
    return await this.userService.findAll();
  }

  /**
   * Create user
   * @param body
   * @returns return object of a user
   */
  @Post()
  async createUser(@Body() body) {
    return await this.userService.createData(body);
  }

  /**
   * Update user
   * @param id
   * @param body
   * @returns return object of a user
   */
  @UsePipes(ValidationPipe)
  @Patch('/:id')
  async updateUser(@Param('id', ParseIntPipe) id, @Body() body) {
    return await this.userService.updateData(id, body);
  }

  /**
   * Delete user
   * @param id
   * @returns return object of a user
   */
  @UsePipes(ValidationPipe)
  @Delete('/:id')
  async deleteUser(@Param('id', ParseIntPipe) id) {
    return await this.userService.deleteUser(id);
  }
}
