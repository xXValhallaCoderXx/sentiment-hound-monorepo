import { Injectable } from '@nestjs/common';
import { Task, Prisma } from '.prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaskRepository {
  constructor(private prisma: PrismaService) {}

  async createTask(params: { data: Prisma.TaskCreateInput }): Promise<Task> {
    const { data } = params;
    return this.prisma.task.create({ data });
  }

  async updateTask(params: {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.TaskUpdateInput;
  }): Promise<Task> {
    const { where, data } = params;
    return this.prisma.task.update({ where, data });
  }

  // async createTaskAssignContentPost(params: { data: Prisma.TaskCreateInput }): Promise<Task> {
  //   const { data } = params;
  //   return this.prisma.task.create({ data });
  // }
}
