import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class AuthorizationData {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @IsString()
  email: string;
  @Column()
  @IsString()
  password: string;
}
