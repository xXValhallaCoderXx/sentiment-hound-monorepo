import { Injectable } from '@nestjs/common';
// import { Prisma, ContentPost } from '@prisma/client';
import { ContentPost, Prisma } from '.prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContentPostRepository {
  constructor(private prisma: PrismaService) {}

  async createContentPost(params: {
    data: Prisma.ContentPostUncheckedCreateWithoutResponsesInput;
  }): Promise<ContentPost> {
    const { data } = params;
    return await this.prisma.contentPost.create({
      data,
    });
  }

  async getAllContentPosts(params: {
    where?: Prisma.ContentPostWhereInput;
  }): Promise<ContentPost[]> {
    try {
      const { where } = params;
      return await this.prisma.contentPost.findMany({
        where,
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateContentPost(params: {
    where: Prisma.ContentPostWhereUniqueInput;
    data: Prisma.ContentPostUpdateInput;
  }): Promise<ContentPost> {
    const { where, data } = params;
    try {
      return await this.prisma.contentPost.update({
        where,
        data,
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}
