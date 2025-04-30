import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { IsString, IsOptional, IsDateString } from 'class-validator';
import { Status } from './status.entity';

@Entity()
export class Task {
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

  @ManyToOne(() => Status, (status) => status.status)
  @JoinColumn({ name: 'status' })
  status: Status;
}