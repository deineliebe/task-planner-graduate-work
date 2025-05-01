import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Status } from './status.entity';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  name: string;

  @Column({ length: 256, nullable: true })
  description: string;

  @Column({ type: 'date', nullable: true })
  deadline: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @Column({ length: 256 })
  status: string;
}