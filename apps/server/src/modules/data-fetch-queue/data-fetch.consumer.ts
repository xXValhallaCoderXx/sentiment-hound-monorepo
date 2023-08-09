import {
  Process,
  Processor,
  InjectQueue,
  OnQueueActive,
  OnQueueCompleted,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { Queue } from 'bull';
import {
  DATA_FETCHING_QUEUE,
  NLP_PROCESSING_QUEUE,
} from 'apps/server/shared/constants';
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
    @InjectQueue(NLP_PROCESSING_QUEUE) private readonly nlpProcessQueue: Queue,
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
        title: youtubeDetails.title,
        description: youtubeDetails.description,
        publishedAt: youtubeDetails.publishedAt,
        image: youtubeDetails.thumbnail?.url,
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

    const comments = await this.youtubeService.fetchAllVideoComments2({
      videoId: job?.data.videoId,
    });

    await this.taskRepository.updateTask({
      where: {
        id: newTask.id,
      },
      data: {
        status: 'pending-sentiment',
      },
    });

    this.logger.log('Data Fetching Task Completed');

    const flatMap: any = [];

    comments?.forEach((comment: any) => {
      flatMap.push({
        // repliesCount: comment?.snippet?.totalReplyCount ?? 0,
        // videoId: comment?.snippet?.videoId,
        // updatedAt: comment.snippet?.topLevelComment?.snippet?.updatedAt,
        remoteId: comment.id,
        platform: 'youtube',
        content: comment.snippet?.topLevelComment?.snippet?.textOriginal,
        author: comment.snippet?.topLevelComment?.snippet?.authorDisplayName,
        likes:
          Number(comment.snippet?.topLevelComment?.snippet?.likeCount) ?? 0,
        publishedAt:
          comment.snippet?.topLevelComment?.snippet?.publishedAt ?? '',
      });
      if (comment?.replies?.comments?.length > 0) {
        comment?.replies?.comments.forEach((reply: any) => {
          flatMap.push({
            // videoId: reply?.snippet?.videoId,
            // updatedAt: reply?.snippet.updatedAt,
            parentId: reply?.snippet?.parentId,
            remoteId: reply.id,
            likes: Number(reply?.snippet?.likeCount) ?? 0,
            content: reply?.snippet.textOriginal,
            platform: 'youtube',
            author: reply?.snippet.authorDisplayName,
            publishedAt: reply?.snippet.publishedAt ?? '',
          });
        });
      }
    });

    this.logger.log('Comment data parsed');
    console.log('FLAT MAP: ', flatMap.length);
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
    return { taskId: newTask.id };
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @OnQueueCompleted()
  async onCompleted(job: Job) {
    const additionalData = job.returnvalue;
    await this.nlpProcessQueue.add('async-sentiment-process', {
      taskId: additionalData?.taskId,
    });
  }
}
