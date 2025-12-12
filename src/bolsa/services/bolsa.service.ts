import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bolsa } from '../entities/bolsa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BolsaService {
  constructor(
    @InjectRepository(Bolsa)
    private bolsaRepository: Repository<Bolsa>,
  ) {}
}
