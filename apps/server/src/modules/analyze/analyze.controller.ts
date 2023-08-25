import { Controller, Post, Logger, Body, HttpCode } from '@nestjs/common';
import { AnalyzeService } from './analyze.service';
import { AnalyzeSentimentDTO } from './analyze.dto';

@Controller('analyze')
export class AnalyzeController {
  private readonly logger = new Logger(AnalyzeController.name);
  constructor(private readonly sentimentService: AnalyzeService) {}

  @Post('youtube')
  @HttpCode(201)
  analyzeYoutubeSentiment(@Body() body: AnalyzeSentimentDTO): any {
    return this.sentimentService.analyzeYoutubeSentiment(body);
  }

  @Post('twitter')
  @HttpCode(201)
  analyzeTwitterSentiment(@Body() body: AnalyzeSentimentDTO): any {
    return this.sentimentService.analyzeTwitterSentiment(body);
  }
}
