import { Module } from '@nestjs/common';
import { Bolsa } from './entities/bolsa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature ([Bolsa])],
  providers: [],
  controllers: [],
  exports: [],
})
export class BolsaModule {}
