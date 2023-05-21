import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  EntityRepository,
  Repository,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Roles } from './roles.model';
import { Personas } from './personas.model';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  name_user: string;

  @Column()
  email_user: string;

  @Column()
  password: string;

  @OneToOne(() => Personas)
  @JoinColumn({
    referencedColumnName: 'id_persona',
    name: 'id_persona',
  })
  personas: string;

  @ManyToMany(() => Roles)
  @JoinTable({
    name: 'users_roles',
    joinColumn: {
      name: 'id_user',
      referencedColumnName: 'id_user',
    },
    inverseJoinColumn: {
      name: 'id_role',
      referencedColumnName: 'id_role',
    },
  })
  roles: Roles[];
}

// @Entity({ name: 'users_roles' })
// export class RolesUser {
//   @PrimaryGeneratedColumn()
//   timestamp: number;

//   @ManyToOne(() => Roles, (roles) => roles.users, {
//     createForeignKeyConstraints: true,
//   })
//   roles: Roles;

//   @ManyToOne(() => Users, (user) => user.roles, {
//     createForeignKeyConstraints: true,
//   })
//   users: Users;
// }

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {}
