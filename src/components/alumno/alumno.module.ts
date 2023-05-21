import { Module } from '@nestjs/common';
import { AlumnosController } from './alumno.controller';
import { AlumnoService } from './alumno.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumnos, AlumnosRepository } from '../../models/alumnos.model';
import { PersonaRepository, Personas } from 'src/models/personas.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Alumnos,
      AlumnosRepository,
      PersonaRepository,
      Personas,
    ]),
  ],
  controllers: [AlumnosController],
  providers: [AlumnoService],
})
export class AlumnosModule {}
