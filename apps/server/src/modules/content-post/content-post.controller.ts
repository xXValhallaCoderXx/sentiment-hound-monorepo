import { Controller, Get } from '@nestjs/common';
import { ContentPostService } from './content-post.service';

@Controller('content-post')
export class ContentPostController {
  constructor(private readonly contentPostService: ContentPostService) {}

  @Get()
  getAllContentPostsWithSentiment(): any {
    return this.contentPostService.getContentPostWithSentiment();
  }
}
