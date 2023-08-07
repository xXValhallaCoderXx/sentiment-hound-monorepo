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
import { ResponseRepository } from '../response/response.repository';

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
    private readonly responseRepository: ResponseRepository,
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
    const newTask = await this.taskRepository.createTask({
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

    this.logger.log('Data Fetching Task Completed');

    const flatMap: any = [];

    comments?.items?.forEach((comment: any) => {
      flatMap.push({
        // repliesCount: comment?.snippet?.totalReplyCount ?? 0,
        // videoId: comment?.snippet?.videoId,
        remoteId: comment.id,
        platform: 'youtube',
        content: comment.snippet?.topLevelComment?.snippet?.textOriginal,
        author: comment.snippet?.topLevelComment?.snippet?.authorDisplayName,
        likes:
          Number(comment.snippet?.topLevelComment?.snippet?.likeCount) ?? 0,
        // updatedAt: comment.snippet?.topLevelComment?.snippet?.updatedAt,
        publishedAt:
          comment.snippet?.topLevelComment?.snippet?.publishedAt ?? '',
      });

      if (comment?.replies?.comments?.length > 0) {
        comment?.replies?.comments.forEach((reply: any) => {
          flatMap.push({
            parentId: reply?.snippet?.parentId,
            remoteId: reply.id,
            likes: Number(reply?.snippet?.likeCount) ?? 0,
            // videoId: reply?.snippet?.videoId,
            content: reply?.snippet.textOriginal,
            platform: 'youtube',
            author: reply?.snippet.authorDisplayName,
            // updatedAt: reply?.snippet.updatedAt,
            publishedAt: reply?.snippet.publishedAt ?? '',
          });
        });
      }
    });

    this.logger.log('Comment data parsed');

    this.logger.log('Comment data saving');
    await this.contentPostRepository.updateContentPost({
      where: {
        id: contentPost.id,
      },
      data: {
        responses: {
          createMany: {
            data: flatMap,
          },
        },
      },
    });

    await this.taskRepository.updateTask({
      where: {
        id: newTask.id,
      },
      data: {
        status: 'pending-sentiment',
      },
    });

    this.logger.log('Comment data saved');
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
