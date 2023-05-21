import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './components/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './models/user.model';
import { Roles } from './models/roles.model';
import { Personas } from './models/personas.model';
import { Alumnos } from './models/alumnos.model';
import { AlumnosModule } from './components/alumno/alumno.module';
import { Servicios } from './models/servicios.model';
import { Boletas } from './models/boletas.model';
import { BoletasModule } from './components/boletas/boletas.module';

@Module({
  imports: [
    UsersModule,
    AlumnosModule,
    BoletasModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [Users, Roles, Personas, Alumnos, Boletas, Servicios],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
