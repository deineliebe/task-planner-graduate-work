import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { AuthorizationData } from './authorization_data.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25, unique: true })
  channel_id: string;

  @OneToOne(() => AuthorizationData, (authData) => authData.user)
  authorizationData: AuthorizationData;
}