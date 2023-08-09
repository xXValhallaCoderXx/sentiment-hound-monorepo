import { Injectable, Logger } from '@nestjs/common';
import { DATA_FETCHING_QUEUE } from 'apps/server/shared/constants';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { AnalyzeYoutubeVideoSentimentDTO } from './analyze.dto';

@Injectable()
export class AnalyzeService {
  constructor(
    @InjectQueue(DATA_FETCHING_QUEUE) private readonly datafetchQueue: Queue,
  ) {}
  private readonly logger = new Logger(AnalyzeService.name);

  async analyzeYoutubeSentiment(
    body: AnalyzeYoutubeVideoSentimentDTO,
  ): Promise<any | null> {
    this.logger.log(`Analyzing youtube sentiment for video ${body.videoId}`);
    await this.datafetchQueue.add('async-data-fetch', {
      videoId: body.videoId,
    });

    return { status: 'ok' };
  }
}
