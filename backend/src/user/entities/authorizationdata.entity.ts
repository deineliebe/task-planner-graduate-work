import { Entity, Column, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class AuthorizationData {
  @Column({ unique: true })
  id: number;

  @PrimaryColumn({ length: 256 })
  email: string;

  @Column({ length: 30 })
  password: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'id' })
  user: User;
}