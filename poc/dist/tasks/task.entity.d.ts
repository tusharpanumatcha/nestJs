import { Model } from 'sequelize-typescript';
import { TaskStatus } from './tasks.model';
export declare class task extends Model<task> {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}
