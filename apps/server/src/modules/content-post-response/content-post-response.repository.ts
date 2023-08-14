import { Injectable } from '@nestjs/common';
import { Prisma, Response } from '.prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResponseRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(params: {
    where?: Prisma.ResponseWhereInput;
    include?: Prisma.ResponseInclude;
  }): Promise<Response[]> {
    const { where, include } = params;
    return await this.prisma.response.findMany({
      where,
      include,
    });
  }

  async create(params: {
    data: Prisma.ResponseCreateInput;
  }): Promise<Response> {
    const { data } = params;
    return await this.prisma.response.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.ResponseWhereUniqueInput;
    data: Prisma.ResponseUpdateInput;
  }): Promise<Response> {
    const { where, data } = params;
    return await this.prisma.response.update({
      where,
      data,
    });
  }

  async updateMany(params: {
    where: Prisma.ResponseWhereInput;
    data: Prisma.ResponseUpdateManyMutationInput;
  }): Promise<{ count: number }> {
    const { where, data } = params;
    try {
      return await this.prisma.response.updateMany({
        where,
        data,
      });
    } catch (err) {
      console.log(err);
      return { count: 0 };
    }
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
