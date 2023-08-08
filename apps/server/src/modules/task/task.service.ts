import { Injectable, Logger, HttpStatus } from '@nestjs/common';
import { Task, Prisma } from '.prisma/client';

import {
  paginator,
  PaginatedResult,
  PaginateFunction,
} from '../prisma/prisma.paginator';
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

  async findMany({
    where,
    orderBy,
    page,
    pageSize,
  }: {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput;
    page?: number;
    pageSize?: number;
  }): Promise<PaginatedResult<Task>> {
    const paginate: PaginateFunction = paginator({ perPage: pageSize ?? 5 });
    return paginate(
      this.prisma.task,
      {
        where,
        orderBy,
      },
      {
        page: page ?? 1,
      },
    );
  }
}
