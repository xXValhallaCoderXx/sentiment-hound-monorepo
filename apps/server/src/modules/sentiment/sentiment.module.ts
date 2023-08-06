import { Module } from '@nestjs/common';
import { SentimentController } from './sentiment.controller';
import { SentimentService } from './sentiment.service';
import { PrismaModule } from '../prisma/prisma.module';
import { YoutubeModule } from '../youtube/youtube.module';
import { NaturalLanguageProcessingModule } from '../natural-language-processing/natural-language-processing.module';
import { BullModule } from '@nestjs/bull';
import { DATA_FETCHING_QUEUE } from 'apps/server/shared/constants';
import { DataFetchingConsumer } from '../data-fetch-queue/data-fetch.consumer';
import { TaskModule } from '../task/task.module';
import { ContentPostModule } from '../content-post/content-post.module';
@Module({
  imports: [
    PrismaModule,
    YoutubeModule,
    TaskModule,
    ContentPostModule,
    NaturalLanguageProcessingModule,
    BullModule.registerQueue({
      name: DATA_FETCHING_QUEUE,
    }),
  ],
  controllers: [SentimentController],
  providers: [SentimentService, DataFetchingConsumer],
})
export class SentimentModule {}
