import { Column, Entity, PrimaryColumn } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity()
export class Group {
  @PrimaryColumn('uuid')
  uuid: string;

  @Column('text')
  nome: string;

  @Column('text')
  descricao: string;

  @Column('text')
  imagem: string;

  @Column('boolean')
  publico: boolean;

  @Column('text', { nullable: true })
  senha?: string;

  @Column('date')
  createdAt: Date;

  constructor(
    nome: string,
    descricao: string,
    imagem: string,
    publico: boolean,
    senha?: string,
  ) {
    this.uuid = randomUUID();
    this.nome = nome;
    this.descricao = descricao;
    this.imagem = imagem;
    this.publico = publico;
    this.senha = senha;
    this.createdAt = new Date();
  }
}
