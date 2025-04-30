import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Tasks } from '../../tasks/entities/task.entity';

@Entity()
export class UserTask {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  task_id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Tasks, (task) => task.id)
  @JoinColumn({ name: 'task_id' })
  task: Tasks;
}