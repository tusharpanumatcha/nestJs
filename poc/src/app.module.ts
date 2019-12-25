import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { DatabaseModule } from './config/database.module';
import { ApiInfoModule } from './api-Info/api-info.module';

@Module({
  imports: [
    DatabaseModule,
    ApiInfoModule,
    TasksModule,
  ],
  providers:[]
})
export class AppModule {}
