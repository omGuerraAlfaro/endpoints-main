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
import { Personas } from './personas.model';

@Entity()
export class Alumnos {
  @PrimaryGeneratedColumn()
  id_alumno: string;

  @Column()
  edad: number;

  @Column()
  vive_con: string;

  @Column()
  enf_cronica: string;

  @Column()
  numero_contacto: string;

  @Column()
  eximido_rel: string;

  @Column()
  id_persona: string;

  @OneToOne(() => Personas)
  @JoinColumn({
    referencedColumnName: 'id_persona',
    name: 'id_alumno',
  })
  persona: string;

  @ManyToMany(() => Personas)
  @JoinTable({
    name: 'apoderados_alumnos',
    joinColumn: {
      name: 'id_apoderado',
      referencedColumnName: 'id_persona',
    },
    inverseJoinColumn: {
      name: 'id_alumno',
      referencedColumnName: 'id_persona',
    },
  })
  alumnos: Personas[];
}

@EntityRepository(Alumnos)
export class AlumnosRepository extends Repository<Alumnos> {}
