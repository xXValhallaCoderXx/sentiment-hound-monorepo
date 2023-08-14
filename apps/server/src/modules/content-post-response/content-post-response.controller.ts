import { Controller, Get, Param, Query } from '@nestjs/common';
import { ContentPostResponseService } from './content-post-response.service';

@Controller('content-post-repsonse')
export class ContentPostResponseController {
  constructor(
    private readonly contentPostResponseService: ContentPostResponseService,
  ) {}

  @Get(':id')
  getContentPostWithResponses(
    @Param('id') id: string,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.contentPostResponseService.getContentResponses({
      id,
      page,
      pageSize,
    });
  }
}
