/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Injectable } from '@nestjs/common';
import { ResponseRepository } from './content-post-response.repository';
import { Prisma } from '.prisma/client';
import { paginator, PaginateFunction } from '../prisma/prisma.paginator';
import { PrismaService } from '../prisma/prisma.service';

interface IGetContentResponseParams {
  id: string;
  where?: Prisma.ResponseWhereUniqueInput;
  orderBy?: Prisma.ResponseOrderByWithRelationInput;
  pageSize?: number;
  page?: number;
}

interface IGetContentResponsesParams {
  where?: Prisma.ResponseWhereInput;
  orderBy?: Prisma.ResponseOrderByWithRelationInput;
  pageSize?: number;
  page?: number;
}

@Injectable()
export class ContentPostResponseService {
  constructor(
    private responseRepository: ResponseRepository,
    private prisma: PrismaService,
  ) {}
  async getTotalSentiment() {
    const result = await this.responseRepository.findAll({});

    const sentimentCounts: any = {
      positive: 0,
      negative: 0,
      neutral: 0,
    };

    // @ts-ignore
    result.forEach((response: any) => {
      sentimentCounts[response.sentiment]++;
    });
    return sentimentCounts;
  }

  async getPaginatedContentResponses(data: IGetContentResponsesParams) {
    console.log('DATA: ', data);
    const paginate: PaginateFunction = paginator({
      perPage: data.pageSize ?? 5,
    });
    const { where, orderBy, page } = data;
    return paginate(
      this.prisma.response,
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
