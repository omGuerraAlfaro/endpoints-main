import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throwError } from 'rxjs';
import { Alumnos } from 'src/models/alumnos.model';
import { Personas } from 'src/models/personas.model';
import { Repository, TypeORMError } from 'typeorm';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumnos)
    private readonly alumnoRepository: Repository<Alumnos>,
    @InjectRepository(Personas)
    private readonly personaRepository: Repository<Personas>,
  ) {}
  async findAll() {
    return await this.alumnoRepository.find();
  }

  async findAlumnos(alumnos: Alumnos[]) {
    const persona: any[] = [];
    for (const alumno of alumnos) {
      const alumnoPersona = await this.personaRepository.findOne({
        relations: ['alumnos'],
        where: { id_persona: alumno.id_persona },
      });
      persona.push({ alumno, alumnoPersona });
    }
    return persona;
  }
  async findApoderado(id: number) {
    try {
      const apoderado = await this.personaRepository.findOne({
        relations: ['alumnos'],
        where: {
          id_persona: id,
        },
      });
      const alumnos = await this.findAlumnos(apoderado.alumnos);
      apoderado.alumnos = alumnos;
      return { apoderado };
    } catch (error) {
      throwError(() => {
        return Error((error as TypeORMError).message);
      });
    }
  }
}
