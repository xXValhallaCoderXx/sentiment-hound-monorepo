import { Module } from '@nestjs/common';
import { AnalyzeController } from './analyze.controller';
import { AnalyzeService } from './analyze.service';
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
import { ContentPostResponseModule } from '../content-post-response/content-post-response.module';
@Module({
  imports: [
    YoutubeModule,
    TaskModule,
    ContentPostModule,
    ContentPostResponseModule,
    NaturalLanguageProcessingModule,
    BullModule.registerQueue({
      name: DATA_FETCHING_QUEUE,
    }),
    BullModule.registerQueue({
      name: NLP_PROCESSING_QUEUE,
    }),
  ],
  controllers: [AnalyzeController],
  providers: [
    AnalyzeService,
    DataFetchingConsumer,
    NaturalLanguageProcessingConsumer,
  ],
})
export class AnalyzeModule {}
