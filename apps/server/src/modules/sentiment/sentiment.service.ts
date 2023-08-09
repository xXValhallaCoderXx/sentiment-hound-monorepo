import { Injectable, Logger, HttpStatus } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { YoutubeService } from '../youtube/youtube.service';
import { NaturalLanguageProcessingService } from '../natural-language-processing/natural-language-processing.service';
import { DATA_FETCHING_QUEUE } from 'apps/server/shared/constants';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { AnalyzeYoutubeVideoSentimentDTO } from './sentiment.dto';

@Injectable()
export class SentimentService {
  constructor(
    private prisma: PrismaService,
    private youtubeService: YoutubeService,
    private nlpService: NaturalLanguageProcessingService,
    @InjectQueue(DATA_FETCHING_QUEUE) private readonly datafetchQueue: Queue,
  ) {}
  private readonly logger = new Logger(SentimentService.name);
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

  async analyzeYoutubeSentiment(
    body: AnalyzeYoutubeVideoSentimentDTO,
  ): Promise<any | null> {
    await this.datafetchQueue.add('async-data-fetch', {
      videoId: body.videoId,
    });

    return { status: 'ok' };
  }

  // async analyzeSentiment(): Promise<any | null> {
  //   const { comments, flatMap, contentPost } =
  //     await this.youtubeService.fetchVideoComments();

  //   const res = await this.nlpService.parseData(flatMap, comments);

  //   const storedContentPost = await this.prisma.contentPost.create({
  //     data: {
  //       platform: 'youtube',
  //       contentId: contentPost?.id,
  //     },
  //   });
  //   const storedPostId = storedContentPost.id;

  //   for (let index = 0; index < res?.data?.length; index++) {
  //     const element = res?.data?.[index];

  //     const storedComment = await this.prisma.response.create({
  //       data: {
  //         contentPostId: storedPostId,
  //         remoteId: element.id ?? '',
  //         sentiment: element.sentiment,
  //         platform: 'youtube',
  //         author: element.author,
  //         publishedAt: element.publishedAt,
  //         content: element.comment,
  //       },
  //     });

  //     const aspectArray =
  //       Object.entries(element?.aspects).map(([aspect, sentiment]) => ({
  //         aspect,
  //         sentiment,
  //       })) || [];

  //     await this.prisma.aspect.createMany({
  //       data: aspectArray?.map((aspect: any) => ({
  //         responseId: storedComment.id,
  //         sentiment: aspect.sentiment,
  //         type: aspect.aspect,
  //       })),
  //     });
  //   }
  //   return {
  //     status: 'success',
  //   };
  // }
}
