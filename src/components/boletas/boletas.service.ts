import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throwError } from 'rxjs';
import { Boletas } from 'src/models/boletas.model';
import { Repository, TypeORMError } from 'typeorm';

@Injectable()
export class BoletasService {
  persona: any[];
  constructor(
    @InjectRepository(Boletas)
    private readonly boletasRepository: Repository<Boletas>,
  ) {}
  async findAll() {
    return await this.boletasRepository.find({
      relations: ['user', 'servicio', 'alumno'],
    });
  }

  async findBoletas(id_apoderado: string) {
    return id_apoderado;
  }
}
