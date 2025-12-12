import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bolsa } from './bolsa/entities/bolsa.entity';
import { Estudante } from './estudante/entities/estudante.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_crm',
      entities: [Bolsa, Estudante],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
