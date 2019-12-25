import { TasksService } from './tasks.service';
import { TaskStatus } from './tasks.model';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAllTasks(): Promise<import("./task.entity").task[]>;
    getTaskById(id: number): Promise<any>;
    createTask(createTaskDto: any): Promise<import("./task.entity").task>;
    deleteTask(id: number): Promise<{
        'status': number;
        'message': string;
    }>;
    updateTaskStatus(id: string, status: TaskStatus): Promise<[number, import("./task.entity").task[]]>;
}
