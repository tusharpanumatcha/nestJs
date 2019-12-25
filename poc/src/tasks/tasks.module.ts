import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { taskProviders } from './task.providers';

@Module({
  controllers: [TasksController],
  providers: [
    TasksService,
    ...taskProviders
  ],
  
})
export class TasksModule {}
