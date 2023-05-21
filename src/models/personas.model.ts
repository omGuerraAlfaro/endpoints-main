import {
  Column,
  Entity,
  EntityRepository,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm';
import { Users } from './user.model';
import { Alumnos } from './alumnos.model';

@Entity()
export class Personas {
  @PrimaryGeneratedColumn()
  id_persona;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  telefono: string;

  @Column()
  fecha_nacimiento: string;

  @Column()
  rut: string;

  @Column()
  estado_civil: string;

  @Column()
  nacionalidad: string;

  @Column()
  actividad: string;

  @Column()
  escolaridad: string;

  @Column()
  correo: string;

  @ManyToMany(() => Alumnos, (alumnos) => alumnos.id_persona)
  @JoinTable({
    name: 'apoderados_alumnos',
    joinColumn: {
      name: 'id_persona',
      referencedColumnName: 'id_persona',
    },
    inverseJoinColumn: {
      name: 'id_alumno',
      referencedColumnName: 'id_alumno',
    },
  })
  alumnos: Alumnos[];
}
@EntityRepository(Personas)
export class PersonaRepository extends Repository<Personas> {}
