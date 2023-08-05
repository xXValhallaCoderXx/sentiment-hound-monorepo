import { Injectable } from '@nestjs/common';
// import { Prisma, ContentPost } from '@prisma/client';
import { ContentPost, Prisma } from '.prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContentPostRepository {
  constructor(private prisma: PrismaService) {}

  async createContentPost(params: {
    data: Prisma.ContentPostCreateInput;
  }): Promise<ContentPost> {
    const { data } = params;
    return this.prisma.contentPost.create({ data });
  }
}
