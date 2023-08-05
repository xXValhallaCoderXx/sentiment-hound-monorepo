import { Controller, Get, Post, Logger } from '@nestjs/common';
import { SentimentService } from './sentiment.service';

@Controller('sentiment')
export class SentimentController {
  private readonly logger = new Logger(SentimentController.name);
  constructor(private readonly sentimentService: SentimentService) {}

  @Get()
  getAllSentiment(): any {
    return this.sentimentService.getAllSentiment();
  }

  @Post('youtube')
  analyzeYoutubeSentiment(): any {
    this.logger.log('Start Youtube Sentiment');
    return this.sentimentService.analyzeYoutubeSentiment();
  }

  @Post()
  analyzeSentiment(): any {
    return this.sentimentService.analyzeSentiment();
  }
}
