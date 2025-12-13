import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudanteModule } from './estudante/estudante.module';
import { BolsaModule } from './bolsa/bolsa.module';
import { Estudante } from './estudante/entities/estudante.entity';
import { Bolsa } from './bolsa/entities/bolsa.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any as 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_DATABASE || 'db_crm',
      entities: [Estudante,Bolsa],
      autoLoadEntities: true,
      synchronize: process.env.DB_SYNCHRONIZE === 'development' ? true : false,
    }),
    EstudanteModule,
    BolsaModule,
  ],
  
  controllers: [],
  providers: [],
})
export class AppModule {}
