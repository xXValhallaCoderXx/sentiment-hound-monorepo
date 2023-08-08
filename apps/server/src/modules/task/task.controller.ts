import { Controller, Get, Param, Logger } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  private readonly logger = new Logger(TaskController.name);
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks(): any {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTask(@Param('id') taskId: string): any {
    return this.taskService.getTask({ id: taskId });
  }
}
