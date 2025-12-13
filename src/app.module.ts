import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudanteModule } from './estudante/estudante.module';
import { BolsaModule } from './bolsa/bolsa.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_crm',
      autoLoadEntities: true,
      synchronize: true,
    }),
    EstudanteModule,
    BolsaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
