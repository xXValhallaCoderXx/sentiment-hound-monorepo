import {
  Process,
  Processor,
  OnQueueActive,
  OnQueueCompleted,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { DATA_FETCHING_QUEUE } from 'apps/server/shared/constants';
import { YoutubeService } from '../youtube/youtube.service';
import { TaskRepository } from '../task/task.repository';
import { ContentPostRepository } from '../content-post/content-post.repository';

interface IComment {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    videoId: string;
    topLevelComment: {
      kind: string;
      etag: string;
      id: string;
      snippet: any;
    };
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  };
}

@Processor(DATA_FETCHING_QUEUE)
export class DataFetchingConsumer {
  constructor(
    private readonly youtubeService: YoutubeService,
    private readonly taskRepository: TaskRepository,
    private readonly contentPostRepository: ContentPostRepository,
  ) {}
  private readonly logger = new Logger(DataFetchingConsumer.name);
  @Process('async-data-fetch')
  async bulkDataFetch(job: Job) {
    this.logger.log('Data Fetching Task Started');
    const youtubeDetails = await this.youtubeService.fetchVideoDetails(
      job.data,
    );
    const contentPost = await this.contentPostRepository.createContentPost({
      data: {
        contentId: youtubeDetails.id,
        platform: 'youtube',
        author: youtubeDetails.author,
      },
    });
    const createdTask = await this.taskRepository.createTask({
      data: {
        contentPost: {
          connect: contentPost,
        },
        status: 'fetching-comments',
        id: contentPost.id,
      },
    });

    const comments = await this.youtubeService.fetchAllVideoComments({
      videoId: job?.data.videoId,
    });

    const flatMap: any = [];

    comments?.items?.forEach((comment: any) => {
      flatMap.push({
        id: comment.id,
        repliesCount: comment?.snippet?.totalReplyCount ?? 0,
        videoId: comment?.snippet?.videoId,
        comment: comment.snippet.textOriginal,
        author: comment.snippet.authorDisplayName,
        likes: comment.snippet.likeCount,
        updatedAt: comment.snippet.updatedAt,
        publishedAt: comment.snippet.publishedAt,
      });

      if (comment?.replies?.comments?.length > 0) {
        comment?.replies?.comments.forEach((reply: any) => {
          flatMap.push({
            id: reply.id,
            parentId: reply?.snippet?.parentId,
            likes: reply?.snippet?.likeCount ?? 0,
            videoId: reply?.snippet?.videoId,
            comment: reply?.snippet.textOriginal,
            author: reply?.snippet.authorDisplayName,
            updatedAt: reply?.snippet.updatedAt,
            publishedAt: reply?.snippet.publishedAt,
          });
        });
      }
    });
    this.logger.log('Data Fetching Task Completed');
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @OnQueueCompleted()
  onCompleted(job: Job) {
    console.log(
      `Completed job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }
}
