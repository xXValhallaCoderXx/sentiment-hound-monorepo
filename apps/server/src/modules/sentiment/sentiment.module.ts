import { Module } from '@nestjs/common';
import { SentimentController } from './sentiment.controller';
import { SentimentService } from './sentiment.service';
import { PrismaModule } from '../prisma/prisma.module';
import { YoutubeModule } from '../youtube/youtube.module';
import { NaturalLanguageProcessingModule } from '../natural-language-processing/natural-language-processing.module';
import { BullModule } from '@nestjs/bull';
import {
  DATA_FETCHING_QUEUE,
  NLP_PROCESSING_QUEUE,
} from 'apps/server/shared/constants';
import { DataFetchingConsumer } from '../data-fetch-queue/data-fetch.consumer';
import { NaturalLanguageProcessingConsumer } from '../natural-language-processing-queue/natural-language-processing.consumer';
import { TaskModule } from '../task/task.module';
import { ContentPostModule } from '../content-post/content-post.module';
import { ResponseModule } from '../response/response.module';
@Module({
  imports: [
    PrismaModule,
    YoutubeModule,
    TaskModule,
    ContentPostModule,
    ResponseModule,
    NaturalLanguageProcessingModule,
    BullModule.registerQueue({
      name: DATA_FETCHING_QUEUE,
    }),
    BullModule.registerQueue({
      name: NLP_PROCESSING_QUEUE,
    }),
  ],
  controllers: [SentimentController],
  providers: [
    SentimentService,
    DataFetchingConsumer,
    NaturalLanguageProcessingConsumer,
  ],
})
export class SentimentModule {}
