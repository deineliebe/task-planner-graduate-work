import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

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