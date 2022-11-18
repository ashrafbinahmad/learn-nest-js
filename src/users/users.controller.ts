import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @ApiOkResponse({ type: User, isArray: true, description: 'All users.' })
  @ApiQuery({ name: 'age', required: false })
  @Get()
  getUsers(@Query('age') age?: number): Promise<User[]> {
    return this.usersService.findAll(age);
  }

  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id') id: string): Promise<User> {
    const user = this.usersService.findById(Number(id))
    if (!user) { throw new NotFoundException() }
    return user;
  }
  
  @ApiBadRequestResponse()
  @ApiCreatedResponse({ type: User })
  @Post()
  createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.createUser(body);


  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<User>{
    return this.usersService.deleteUser(id)
  }

}
