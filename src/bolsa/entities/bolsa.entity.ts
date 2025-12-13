import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Estudante } from '../../estudante/entities/estudante.entity';

@Entity({ name: 'tb_bolsas' })
export class Bolsa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string; // Ex: Bolsa Integral, Bolsa Parcial, Desconto 50%

  @Column('decimal', { precision: 5, scale: 2 })
  porcentagem: number; // Ex: 100, 50, 75

  @Column()
  instituicao: string; // Universidade / escola da bolsa

  @Column({ nullable: true })
  curso: string; // Curso específico, se tiver

  @Column({ type: 'date' })
  validade: Date; // Data limite da oferta

  @Column({ default: true })
  ativa: boolean; // Se a bolsa está ativa

  // RELACIONAMENTO
  @ManyToOne(() => Estudante, (estudante) => estudante.bolsa, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  estudante: Estudante;
}
