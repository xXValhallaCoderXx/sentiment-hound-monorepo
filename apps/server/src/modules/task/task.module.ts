import { Module } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [TaskRepository],
  exports: [TaskRepository],
})
export class TaskModule {}
