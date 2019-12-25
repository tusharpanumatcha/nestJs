import { TaskStatus } from './tasks.model';
import { task } from './task.entity';
export declare class TasksService {
    private readonly taskRepository;
    constructor(taskRepository: typeof task);
    getAllTasks(): Promise<task[]>;
    getTaskById(id: number): Promise<task>;
    createTask(createTaskDto: any): Promise<task>;
    updateTaskStatus(id: string, status: TaskStatus): Promise<[number, task[]]>;
    deleteTask(id: number): Promise<number>;
}
