import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudanteModule } from './estudante/estudante.module';
import { BolsaModule } from './bolsa/bolsa.module';
import { Estudante } from './estudante/entities/estudante.entity';
import { Bolsa } from './bolsa/entities/bolsa.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'mysql',
      host:  process.env.DB_HOST,
      port:  Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Estudante,Bolsa],
      synchronize: process.env.DB_SYNCHRONIZE === 'development',
    }),
    EstudanteModule,
    BolsaModule,
  ],
  
  controllers: [],
  providers: [],
})
export class AppModule {}
