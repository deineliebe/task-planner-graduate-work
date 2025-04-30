import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Status {
  @PrimaryColumn({ length: 25 })
  status: string;
}