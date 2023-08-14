import { Controller, Get, Param } from '@nestjs/common';
import { ContentPostResponseService } from './content-post-response.service';

@Controller('content-post-repsonse')
export class ContentPostResponseController {
  constructor(
    private readonly contentPostResponseService: ContentPostResponseService,
  ) {}

  @Get(':id')
  getContentPostWithResponses(@Param('id') id: string) {
    return this.contentPostResponseService.getContentResponses(id);
  }
}
