import { Injectable } from '@nestjs/common';
import { ResponseRepository } from './content-post-response.repository';
import { Prisma } from '.prisma/client';
import { paginator, PaginateFunction } from '../prisma/prisma.paginator';
import { PrismaService } from '../prisma/prisma.service';

interface IGetContentResponsesParams {
  id: string;
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
  async getPaginatedContentResponses(data: IGetContentResponsesParams) {
    const paginate: PaginateFunction = paginator({
      perPage: data.pageSize ?? 5,
    });
    const { where, orderBy, page, id } = data;
    return paginate(
      this.prisma.response,
      {
        where: {
          ...where,
          contentPostId: id,
        },
        orderBy,
      },
      {
        page: page ?? 1,
      },
    );
  }
}
