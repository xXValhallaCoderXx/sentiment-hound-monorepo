import { Injectable } from '@nestjs/common';
import { Prisma, Response } from '.prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResponseRepository {
  constructor(private prisma: PrismaService) {}

  async create(params: {
    data: Prisma.ResponseCreateInput;
  }): Promise<Response> {
    const { data } = params;
    return await this.prisma.response.create({
      data,
    });
  }

  async createMany(params: {
    data: Prisma.ResponseCreateManyInput;
  }): Promise<{ count: number }> {
    const { data } = params;
    console.log(data);
    return await this.prisma.response.createMany({
      data,
    });
  }
}
