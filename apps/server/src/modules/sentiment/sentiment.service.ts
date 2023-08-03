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
    const getAllContentPostAndResponses =
      await this.prisma.contentPost.findMany({
        include: {
          responses: {
            include: {
              aspects: true,
            },
          },
        },
      });

    return getAllContentPostAndResponses;
  }

  async analyzeSentiment(): Promise<any | null> {
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

    for (let index = 0; index < res?.data?.length; index++) {
      const element = res?.data?.[index];

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

      const aspectArray =
        Object.entries(element?.aspects).map(([aspect, sentiment]) => ({
          aspect,
          sentiment,
        })) || [];

      await this.prisma.aspect.createMany({
        data: aspectArray?.map((aspect: any) => ({
          responseId: storedComment.id,
          sentiment: aspect.sentiment,
          type: aspect.aspect,
        })),
      });
    }
    return {
      status: 'success',
    };
  }
}
