import { Controller, Post, Logger, Body, HttpCode } from '@nestjs/common';
import { AnalyzeService } from './analyze.service';
import { AnalyzeYoutubeVideoSentimentDTO } from './analyze.dto';

@Controller('analyze')
export class AnalyzeController {
  private readonly logger = new Logger(AnalyzeController.name);
  constructor(private readonly sentimentService: AnalyzeService) {}

  @Post('youtube')
  @HttpCode(201)
  analyzeYoutubeSentiment(@Body() body: AnalyzeYoutubeVideoSentimentDTO): any {
    return this.sentimentService.analyzeYoutubeSentiment(body);
  }
}
