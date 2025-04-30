import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsOptional, IsDateString } from 'class-validator';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({ nullable: true })
  @IsString()
  name: string;
  @Column({ nullable: true })
  @IsString()
  @IsOptional()
  description: string;
  @Column({ nullable: true })
  @IsString()
  status: string;
  @Column({ type: 'date', nullable: true })
  @IsDateString()
  @IsOptional()
  deadline: Date | null;
  @Column({ type: 'date', nullable: true })
  @IsDateString()
  created_at: Date;
}
