import { task } from "./task.entity";

export const taskProviders = [
    {
        provide: 'TASK_REPOSITORY',
        useValue: task,
    },
];
