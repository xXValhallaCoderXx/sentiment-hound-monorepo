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
    const { comments, flatMap, contentPost } =
      await this.youtubeService.fetchVideoComments();

    const res = await this.nlpService.parseData(flatMap, comments);

    const storedContentPost = await this.prisma.contentPost.create({
      data: {
        platform: 'youtube',
        contentId: contentPost?.id,
      },
    });
    const storedPostId = storedContentPost.id;

    for (let index = 0; index < res.length; index++) {
      const element = res[index];
      console.log('ELEMENT: ', element);
      const storedComment = await this.prisma.response.create({
        data: {
          contentPostId: storedPostId,
          sentiment: element.sentiment,
          platform: 'youtube',
          author: element.author,
          publishedAt: element.publishedAt,
          content: element.comment,
        },
      });

      const commentAspects = await this.prisma.aspect.createMany({
        data: element.aspects.map((aspect) => ({
            responseId: storedComment.id,
            aspect: aspect.aspect,
            sentiment: aspect.sentiment,
      })
    }
    return 'res';
  }

  async analyzeSentiment(): Promise<any | null> {
    return await this.prisma.contentPost.findMany();
  }
}
