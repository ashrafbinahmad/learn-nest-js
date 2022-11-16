import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 1, name: 'Ashraf' }, { id: 2, name: 'Ameen' }, { id: 2, name: 'Ashraf' }]

  findAll(name? : string) {
    if (name) return this.users.filter(user => user.name == name)
    return this.users
  }

  findById(userId: number) {
    return this.users.find(user => user.id === userId);
  }

  createUser(CreateUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...CreateUserDto }

    this.users.push(newUser)

    return newUser
  }
}
