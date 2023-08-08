import { Injectable, Logger, HttpStatus } from '@nestjs/common';
import { Task } from '.prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { TaskRepository } from './task.repository';

interface IGetTaskParams {
  id: string;
}

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    private taskRepository: TaskRepository,
  ) {}
  private readonly logger = new Logger(TaskService.name);

  async getTask(data: IGetTaskParams): Promise<Task | null> {
    try {
      const task = await this.taskRepository.findUnique({
        where: {
          id: data.id,
        },
      });
      return task;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getAllTasks(): Promise<Task[]> {
    try {
      const tasks = await this.prisma.task.findMany();
      return tasks;
    } catch (err) {
      throw new Error(err);
    }
  }
}
