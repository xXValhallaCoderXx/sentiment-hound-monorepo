import { Injectable, Logger, HttpException } from '@nestjs/common';
import { DATA_FETCHING_QUEUE } from 'apps/server/shared/constants';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { AnalyzeSentimentDTO } from './analyze.dto';
import { YOUTUBE_VIDEO_ID_REGEX } from 'apps/server/shared/utilites/regext-utils';

@Injectable()
export class AnalyzeService {
  constructor(
    @InjectQueue(DATA_FETCHING_QUEUE) private readonly dataFetchQueue: Queue,
  ) {}
  private readonly logger = new Logger(AnalyzeService.name);

  async analyzeYoutubeSentiment(
    body: AnalyzeSentimentDTO,
  ): Promise<any | null> {
    if (YOUTUBE_VIDEO_ID_REGEX.test(body.id) === false) {
      throw new HttpException('Invalid Youtube Video ID', 400);
    }
    this.logger.log(`Analyzing youtube sentiment for video ${body.id}`);

    await this.dataFetchQueue.add('youtube-data-fetch', {
      id: body.id,
    });

    return { status: 'Job added to be processed' };
  }

  async analyzeTwitterSentiment(
    body: AnalyzeSentimentDTO,
  ): Promise<any | null> {
    this.logger.log(`Analyzing Twitter sentiment for Post: ${body.id}`);
    await this.dataFetchQueue.add('twitter-data-fetch', {
      id: body.id,
    });

    return { status: 'ok' };
  }
}
