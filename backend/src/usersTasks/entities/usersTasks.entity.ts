import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNumber } from 'class-validator';

@Entity()
export class UserTasks {
  @PrimaryGeneratedColumn()
  taskId: number;

  @Column()
  @IsNumber()
  userId: number;
}
