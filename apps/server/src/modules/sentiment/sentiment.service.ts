import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { YoutubeService } from '../youtube/youtube.service';
import { NaturalLanguageProcessingService } from '../natural-language-processing/natural-language-processing.service';
@Injectable()
export class SentimentService {
  constructor(
    private prisma: PrismaService,
    private youtubeService: YoutubeService,
    private nlpService: NaturalLanguageProcessingService,
  ) {}
  async getAllSentiment(): Promise<any | null> {
    const { comments, flatMap } =
      await this.youtubeService.fetchVideoComments();

    const res = await this.nlpService.parseData(flatMap, comments);
    return res;
  }

  async analyzeSentiment(): Promise<any | null> {
    return await this.prisma.contentPost.findMany();
  }
}
