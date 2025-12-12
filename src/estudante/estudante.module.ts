import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudante } from './entities/estudante.entity';

@Module({
  imports: [ TypeOrmModule.forFeature ([Estudante])],
  providers: [],
  controllers: [],
  exports: [],
})
export class EstudanteModule {}
