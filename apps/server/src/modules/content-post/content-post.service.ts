/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Injectable } from '@nestjs/common';
import { ContentPostRepository } from './content-post.repository';
import { Prisma } from '.prisma/client';
import {
  paginator,
  PaginatedResult,
  PaginateFunction,
} from '../prisma/prisma.paginator';
import { PrismaService } from '../prisma/prisma.service';

interface IGetContentResponsesParams {
  where?: Prisma.ContentPostWhereInput;
  orderBy?: Prisma.ContentPostOrderByWithRelationInput;
  pageSize?: number;
  page?: number;
}

@Injectable()
export class ContentPostService {
  constructor(
    private contentPostRepository: ContentPostRepository,
    private prisma: PrismaService,
  ) {}

  async getPaginatedConentPosts(data: IGetContentResponsesParams) {
    // return await this.contentPostRepository.getAllContentPosts({
    //   where: { responses: { some: { sentiment: { not: null } } } },
    // });
    const paginate: PaginateFunction = paginator({
      perPage: data.pageSize ?? 5,
    });
    const { where, orderBy, page } = data;
    return paginate(
      this.prisma.contentPost,
      {
        where,
        orderBy,
      },
      {
        page: page ?? 1,
      },
    );
  }

  async getContentPostWithResponses(id: string) {
    const data = await this.contentPostRepository.getContentPost({
      where: { id },
      include: { responses: true },
    });
    const sentimentCounts: any = {
      positive: 0,
      negative: 0,
      neutral: 0,
    };
    // @ts-ignore
    data?.responses?.forEach((response: any) => {
      sentimentCounts[response.sentiment]++;
    });

    return {
      ...data,
      sentimentCounts,
    };
  }
}
