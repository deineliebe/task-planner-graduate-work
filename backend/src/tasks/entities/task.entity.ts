import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsOptional, IsDateString } from 'class-validator';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  @IsString()
  name: string;
  @Column()
  @IsString()
  @IsOptional()
  description: string;
  @Column()
  @IsString()
  status: string;
  @Column({ type: 'date' })
  @IsDateString()
  @IsOptional()
  deadline: Date | null;
  @Column({ type: 'date' })
  @IsDateString()
  created_at: Date;
}
