import { Module } from '@nestjs/common';
import { SentimentController } from './sentiment.controller';
import { SentimentService } from './sentiment.service';
import { PrismaModule } from '../prisma/prisma.module';
import { YoutubeModule } from '../youtube/youtube.module';
import { NaturalLanguageProcessingModule } from '../natural-language-processing/natural-language-processing.module';
@Module({
  imports: [PrismaModule, YoutubeModule, NaturalLanguageProcessingModule],
  controllers: [SentimentController],
  providers: [SentimentService],
})
export class SentimentModule {}
