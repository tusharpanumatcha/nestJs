import { Controller, Get, Post, Body, Param, Delete, Query, Patch, UsePipes, ValidationPipe, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskModel, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { ApiBody } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get()
    async getAllTasks() {
        // const Tasks = await this.taskService.getAllTasks();
        return await this.taskService.getAllTasks();
    }

    @Get('/:id')
    async getTaskById(@Param('id', ParseIntPipe)id: number): Promise<any> {
        const taskById = await this.taskService.getTaskById(id);
        return taskById;
    }

    @Post()
    // @UsePipes(ValidationPipe)
    createTask(
       @Body() createTaskDto: any
        ) {
            console.log(createTaskDto, 'createTaskDto');
        return this.taskService.createTask(createTaskDto);
    }

    @Delete('/:id')
    async deleteTask(@Param('id') id: number) {
        const result = await this.taskService.deleteTask(id);
        if(!result) {
            throw new NotFoundException(`Task with Id ${id} not found`);
        } else {
            return {
                'status':200, 
                'message':'Successfully deleted task with ${id} as Id'
            };
        }
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id')id: string, 
        @Body('status', TaskStatusValidationPipe)status: TaskStatus) {
        return this.taskService.updateTaskStatus(id, status);
    }

}
