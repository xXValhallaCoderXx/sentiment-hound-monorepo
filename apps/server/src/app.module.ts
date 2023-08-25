import { Module } from '@nestjs/common';
import { TrpcModule } from '@server/trpc/trpc.module';
import { ContentPostModule } from './modules/content-post/content-post.module';
import { ContentPostResponseModule } from './modules/content-post-response/content-post-response.module';
import { AspectModule } from './modules/aspect/aspect.module';
import { YoutubeModule } from './modules/youtube/youtube.module';
import { NaturalLanguageProcessingModule } from './modules/natural-language-processing/natural-language-processing.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { BullModule } from '@nestjs/bull';
import { TaskModule } from './modules/task/task.module';
import { AnalyzeModule } from './modules/analyze/analyze.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
        password: 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81',
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    TrpcModule,
    ContentPostModule,
    ContentPostResponseModule,
    AspectModule,
    YoutubeModule,
    NaturalLanguageProcessingModule,
    TaskModule,
    AnalyzeModule,
  ],
  controllers: [],
  providers: [],
  exports: [BullModule],
})
export class AppModule {}
