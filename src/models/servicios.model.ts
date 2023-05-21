import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('servicios')
export class Servicios {
  @PrimaryGeneratedColumn()
  id_servicio: string;

  @Column()
  descripcion: number;

  @Column()
  costo: string;

  @Column()
  descuento: string;
}
