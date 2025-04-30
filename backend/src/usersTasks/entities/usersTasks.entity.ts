import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { IsNumber } from 'class-validator';
import { User } from '../../users/entities/user.entity';
import { Tasks } from '../../tasks/entities/task.entity';

@Entity()
export class UserTasks {
  @PrimaryColumn()
  @IsNumber()
  taskId: number;  // Foreign key to Tasks

  @PrimaryColumn()
  @IsNumber()
  userId: number;  // Foreign key to User

  // Relationships
  @ManyToOne(() => Tasks, (task) => task.id)
  @JoinColumn({ name: 'taskId' })
  task: Tasks;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  user: User;
}
