import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoletasService } from './boletas.service';
import { Boletas } from '../../models/boletas.model';

@Controller('boletas')
export class BoletasController {
  constructor(private readonly boletasService: BoletasService) {}

  @Get()
  async getBoletas() {
    return await this.boletasService.findAll();
  }

  @Get('/:id_apoderado')
  async getAlumnosByApoderado(@Param('id_apoderado') id_apoderado: string) {
    return await this.boletasService.findBoletas(id_apoderado);
  }
}
