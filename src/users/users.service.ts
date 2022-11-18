import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

  async findAll(age: number): Promise<User[]> {
    if (!age) return await this.usersRepository.find()
    else this.getUsersByAge(age)
  }

  async findById(userId: number): Promise<User> {
    try {
      return await this.usersRepository.findOneOrFail({ where: { id: userId } });
    }
    catch (err) {
      throw err
    }
  }

  async createUser(CreateUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(CreateUserDto)

    return await this.usersRepository.save(newUser)
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.findById(id)

    return await this.usersRepository.remove(user)
  }

  async getUsersByAge(age: number): Promise<User[]> {
    return this.usersRepository.find({where:{age}})

  }
}
