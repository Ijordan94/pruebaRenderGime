import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './users.service';



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.createUser(createUserDto);
    } catch (error) {
      throw new BadRequestException('Error al crear el usuario'); 
  }
}
  @Get()
  async findAll(
    @Query('page') page: number = 1, 
    @Query('limit') limit: number = 10, 
  ) {
    try {
      return await this.usersService.getAllUsers(page, limit);
    } catch (error) {
      throw new BadRequestException('Error al obtener usuarios');
    }
  }

}
