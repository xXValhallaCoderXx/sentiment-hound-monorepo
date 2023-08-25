/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  Controller,
  Get,
  Param,
  Logger,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  private readonly logger = new Logger(TaskController.name);
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('pageSize', ParseIntPipe) pageSize: number = 10,
    @Query('orderBy') orderBy: string = 'status:desc',
    @Query('filterBy') filterBy?: string,
  ): any {
    return this.taskService.findMany({
      page,
      pageSize,
      // orderBy: { status: 'asc' },
      // where: { status: 'completed' },
    });
  }

  @Get(':id')
  getTask(@Param('id') taskId: string): any {
    return this.taskService.getTask({ id: taskId });
  }
}
