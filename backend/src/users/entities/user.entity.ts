import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @IsString()
  email: string;
  @Column()
  @IsString()
  password: string;
}
