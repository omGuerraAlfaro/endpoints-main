import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users, UsersRepository } from '../../models/user.model';
import { PersonaRepository, Personas } from 'src/models/personas.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Users,
      UsersRepository,
      PersonaRepository,
      Personas,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
