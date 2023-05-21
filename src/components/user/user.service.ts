import { Injectable } from '@nestjs/common';
import { Users } from '../../models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, TypeORMError } from 'typeorm';
import { throwError } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}
  async addUser(user: Users): Promise<Users> {
    return this.usersRepository.save(user);
  }
  async findOne(id_user: number): Promise<any> {
    try {
      const user = await this.usersRepository.findOne({
        where: { id_user },
        relations: ['roles', 'personas'],
      });
      return {
        user,
      };
    } catch (error) {
      return throwError(() => {
        Error((error as TypeORMError).message);
      });
    }
  }
  async login(email_user: string, password: string): Promise<any> {
    try {
      const user = await this.usersRepository.findOne({
        where: { email_user, password },
        relations: ['roles', 'personas'],
      });
      return user;
    } catch (error) {
      throwError(() => {
        return Error((error as TypeORMError).message);
      });
    }
  }
  async findAll(): Promise<any> {
    const users = await this.usersRepository
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.roles', 'roles')
      .getMany();
    return users;
  }
}
