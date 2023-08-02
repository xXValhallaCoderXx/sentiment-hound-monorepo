import { Module } from '@nestjs/common';
import { TrpcModule } from '@server/trpc/trpc.module';
import { SentimentModule } from './modules/sentiment/sentiment.module';
import { ContentPostModule } from './modules/content-post/content-post.module';
import { ResponseModule } from './modules/response/response.module';
import { AspectModule } from './modules/aspect/aspect.module';
import { YoutubeModule } from './modules/youtube/youtube.module';
import { NaturalLanguageProcessingModule } from './modules/natural-language-processing/natural-language-processing.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    TrpcModule,
    SentimentModule,
    ContentPostModule,
    ResponseModule,
    AspectModule,
    YoutubeModule,
    NaturalLanguageProcessingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
