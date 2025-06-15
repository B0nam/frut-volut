import { randomUUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn('uuid')
  uuid: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column('date')
  createdAt: Date;

  constructor(email: string, password: string) {
    this.uuid = randomUUID();
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
  }
}
