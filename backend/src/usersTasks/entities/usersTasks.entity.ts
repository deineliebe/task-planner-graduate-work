import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IsNumber } from 'class-validator';

@Entity()
export class UserTasks {
  @PrimaryColumn()
  @IsNumber()
  taskId: number;

  @Column()
  @IsNumber()
  userId: number;
}
