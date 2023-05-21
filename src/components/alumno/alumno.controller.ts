import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { Alumnos } from '../../models/alumnos.model';

@Controller('alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnoService) {}

  @Get()
  async getAlumnos() {
    return await this.alumnosService.findAll();
  }

  @Get('/:id_apoderado')
  async getAlumnosByApoderado(@Param('id_apoderado') id_apoderado: number) {
    return await this.alumnosService.findApoderado(id_apoderado);
  }
}
