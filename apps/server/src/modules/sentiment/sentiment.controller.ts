import { Controller, Get, Post, Logger, Body, HttpCode } from '@nestjs/common';
import { SentimentService } from './sentiment.service';
import { AnalyzeYoutubeVideoSentimentDTO } from './sentiment.dto';

@Controller('sentiment')
export class SentimentController {
  private readonly logger = new Logger(SentimentController.name);
  constructor(private readonly sentimentService: SentimentService) {}

  @Get()
  getAllSentiment(): any {
    return this.sentimentService.getAllSentiment();
  }

  @Post('youtube')
  @HttpCode(201)
  analyzeYoutubeSentiment(@Body() body: AnalyzeYoutubeVideoSentimentDTO): any {
    return this.sentimentService.analyzeYoutubeSentiment(body);
  }

  @Post()
  analyzeSentiment(): any {
    return this.sentimentService.analyzeSentiment();
  }
}
