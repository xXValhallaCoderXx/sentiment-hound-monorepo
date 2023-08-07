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

  async updateContentPost(params: {
    where: Prisma.ContentPostWhereUniqueInput;
    data: Prisma.ContentPostUpdateInput;
  }): Promise<ContentPost> {
    const { where, data } = params;
    console.log('WHAEEEERE: ', where);
    try {
      return await this.prisma.contentPost.update({
        where,
        data,
      });
    } catch (err) {
      console.log('ERROR: ', err);
      throw new Error(err);
    }
  }
}
