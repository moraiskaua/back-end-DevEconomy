import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/users.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}
}
