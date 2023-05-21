import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  EntityRepository,
  Repository,
} from 'typeorm';
import { Users } from './user.model';
import { Servicios } from './servicios.model';
import { Alumnos } from './alumnos.model';

@Entity('boletas')
export class Boletas {
  @PrimaryGeneratedColumn()
  id_boleta: number;

  @Column()
  monto_total: string;

  @Column()
  cantidad: string;

  @Column()
  tipo_pago: string;

  @Column()
  fecha_transaccion: string;

  @Column()
  iva: string;

  @Column()
  estado: string;

  @Column()
  id_servicio: string;

  @Column()
  id_user: string;

  @Column()
  id_alumno: string;

  @OneToOne(() => Servicios)
  @JoinColumn({
    referencedColumnName: 'id_servicio',
    name: 'id_servicio',
  })
  servicio: string;

  @OneToOne(() => Users)
  @JoinColumn({
    referencedColumnName: 'id_user',
    name: 'id_user',
  })
  user: string;

  @OneToOne(() => Alumnos)
  @JoinColumn({
    referencedColumnName: 'id_alumno',
    name: 'id_alumno',
  })
  alumno: string;
}

@EntityRepository(Boletas)
export class BoletasRepository extends Repository<Boletas> {}
