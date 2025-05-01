import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from '../../user/entities/user.entity';
import { Tasks } from '../../tasks/entities/task.entity';

@Entity()
export class UserTasks {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  task_id: number;

  @ManyToOne(() => Users, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @ManyToOne(() => Tasks, (task) => task.id)
  @JoinColumn({ name: 'task_id' })
  task: Tasks;
}