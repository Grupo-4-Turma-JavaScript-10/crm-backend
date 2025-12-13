import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudanteModule } from './estudante/estudante.module';
import { BolsaModule } from './bolsa/bolsa.module';
import { Estudante } from './estudante/entities/estudante.entity';
import { Bolsa } from './bolsa/entities/bolsa.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:  'localhost',
      port:  3306,
      username: 'root',
      password: 'root',
      database: 'db_crm',
      entities: [Estudante,Bolsa],
      synchronize: true,
    }),
    EstudanteModule,
    BolsaModule,
  ],
  
  controllers: [],
  providers: [],
})
export class AppModule {}
