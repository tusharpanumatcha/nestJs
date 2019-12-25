import { Injectable, NotFoundException, Inject, BadRequestException } from '@nestjs/common';
import { TaskStatus } from './tasks.model';
import * as uuid from 'uuid/v1'
import { CreateTaskDto } from './dto/create-task.dto';
import { task } from './task.entity';

@Injectable()
export class TasksService {

    constructor(
        @Inject('TASK_REPOSITORY') private readonly taskRepository: typeof task
        ) {

    }

    async getAllTasks(): Promise<task[]> {
        return await this.taskRepository.findAll<task>();
    }

    async getTaskById(id: number) {
        const found =  await this.taskRepository.findOne({ where: {id: id} });
        if(!found) {
            throw new NotFoundException(`Task with "${id}" not found`);
        }
        return found;
    }

    async createTask(createTaskDto: any) {
        if(createTaskDto) {
            const response = await this.taskRepository.create(
                { 
                    id: createTaskDto.id,
                    title: createTaskDto.title, 
                    description: createTaskDto.description,
                },
            );
            return response;
        } else {
            throw new BadRequestException(`Bad Data`);
        }
    }

    async updateTaskStatus(id: string, status: TaskStatus) {
        console.log('hitting');
        const response = await this.taskRepository.update(
            {title: status},
            {returning: true, where: {id: id} }
          )
        return response;
    }

    async deleteTask(id: number) {
        console.log(id, 'id');
        const response = await this.taskRepository.destroy({
            where: {
                id: id
            }
        });
        console.log(response,'response');
        return response;
    }
}
