import { Injectable } from '@nestjs/common';
import { Prisma } from '.prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResponseRepository {
  constructor(private prisma: PrismaService) {}

  async createResponse(params: {
    data: Prisma.ResponseCreateManyInput;
  }): Promise<{ count: number }> {
    const { data } = params;
    return await this.prisma.response.createMany({
      data,
    });
  }
}
