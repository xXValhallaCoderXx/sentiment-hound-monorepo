import { Controller, Get, Post } from '@nestjs/common';
import { SentimentService } from './sentiment.service';

@Controller('sentiment')
export class SentimentController {
  constructor(private readonly sentimentService: SentimentService) {}

  @Get()
  getAllSentiment(): any {
    return this.sentimentService.getAllSentiment();
  }

  @Post()
  analyzeSentiment(): any {
    return this.sentimentService.analyzeSentiment();
  }
}
