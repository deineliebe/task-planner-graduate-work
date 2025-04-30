import { Entity, Column } from 'typeorm';
import { IsNumber } from 'class-validator';

@Entity()
export class UserTasks {
  @Column()
  @IsNumber()
  taskId: number;
  @Column()
  @IsNumber()
  userId: number;
}
