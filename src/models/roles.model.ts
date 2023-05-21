import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  EntityRepository,
  Repository,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Users } from './user.model';

@Entity('roles')
export class Roles {
  @PrimaryGeneratedColumn()
  id_role: number;

  @Column()
  description: string;

  @ManyToMany(() => Users, (user) => user.roles)
  users: Users[];
}
