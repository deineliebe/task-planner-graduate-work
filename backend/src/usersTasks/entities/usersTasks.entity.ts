import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { IsNumber } from 'class-validator';
import { User } from '../../users/entities/user.entity';
import { Tasks } from '../../tasks/entities/task.entity';

@Entity()
export class UserTasks {
  @PrimaryColumn()
  @Column()
  @IsNumber()
  @ManyToOne(() => Tasks, (task) => task.id)
  taskId: number;
  @PrimaryColumn()
  @Column()
  @IsNumber()
  @ManyToOne(() => User, (user) => user.id)
  userId: number;
}
