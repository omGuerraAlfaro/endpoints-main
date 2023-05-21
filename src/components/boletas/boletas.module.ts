import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boletas, BoletasRepository } from 'src/models/boletas.model';
import { BoletasController } from './boletas.controller';
import { BoletasService } from './boletas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Boletas, BoletasRepository])],
  controllers: [BoletasController],
  providers: [BoletasService],
})
export class BoletasModule {}
