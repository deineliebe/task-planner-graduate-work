import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  @IsString()
  email: string;
  @Column()
  @IsString()
  password: string;
}
