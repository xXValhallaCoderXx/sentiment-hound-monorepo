import { Controller, Get, Param, Query } from '@nestjs/common';
import { ContentPostResponseService } from './content-post-response.service';

@Controller('content-post-response')
export class ContentPostResponseController {
  constructor(
    private readonly contentPostResponseService: ContentPostResponseService,
  ) {}

  // @Get(':id')
  // getContentPostWithResponses(
  //   @Param('id') id: string,
  //   @Query('page') page: number,
  //   @Query('pageSize') pageSize: number,
  // ) {
  //   return this.contentPostResponseService.getContentResponse({
  //     id,
  //     page,
  //     pageSize,
  //   });
  // }

  @Get('')
  getContentResponsesPaginated(
    @Query('page') page: number,
    @Query('size') size: number,
    @Query('sentiment') sentiment: string,
  ) {
    return this.contentPostResponseService.getPaginatedContentResponses({
      page,
      pageSize: size,
      sentiment,
    });
  }

  @Get('sentiment')
  getTotalSentiment() {
    return this.contentPostResponseService.getTotalSentiment();
  }
}
