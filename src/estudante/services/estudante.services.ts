import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudante } from '../entities/estudante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstudanteService {
  constructor(
    @InjectRepository(Estudante)
    private estudanteRepository: Repository<Estudante>,
  ) {}
}
