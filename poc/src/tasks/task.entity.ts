import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { TaskStatus } from './tasks.model';

@Table
export class task extends Model<task> {
  
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  title: string;

  @Column
  description: string;

  @Column
  status: TaskStatus;
}
