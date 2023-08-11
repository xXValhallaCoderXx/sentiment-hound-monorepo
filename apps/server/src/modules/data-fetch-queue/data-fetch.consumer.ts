import {
  Process,
  Processor,
  InjectQueue,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueError,
  OnQueueFailed,
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

@Processor(DATA_FETCHING_QUEUE)
export class DataFetchingConsumer {
  constructor(
    private readonly youtubeService: YoutubeService,
    private readonly taskRepository: TaskRepository,
    private readonly contentPostRepository: ContentPostRepository,
    @InjectQueue(NLP_PROCESSING_QUEUE) private readonly nlpProcessQueue: Queue,
  ) {}
  private readonly logger = new Logger(DataFetchingConsumer.name);
  @Process('youtube-data-fetch')
  async youtubeDataFetch(job: Job) {
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

    this.logger.log('Youtube Video Content Data Received');

    const newTask = await this.taskRepository.createTask({
      data: {
        contentPost: {
          connect: contentPost,
        },
        status: 'fetching-comments',
        id: contentPost.id,
      },
    });

    this.logger.log(`Fetching all comments for video ${job?.data.id}`);

    const comments = await this.youtubeService.fetchAllVideoComments2({
      id: job?.data.id,
    });

    await this.taskRepository.updateTask({
      where: {
        id: newTask.id,
      },
      data: {
        status: 'pending-sentiment',
      },
    });

    this.logger.log(`Fetched ${comments?.length} comments}`);
    const flatMap: any = [];
    this.logger.log('Parsing Comment Data');
    comments?.forEach((comment: any) => {
      flatMap.push({
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

    this.logger.log(`Comment Data Saved - Parsed ${flatMap.length} comments`);
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

    this.logger.log('Youtube comment data has been saved');
    return { taskId: newTask.id };
  }

  @Process('twitter-data-fetch')
  async bulkTweetFetch(job: Job) {
    this.logger.log('Twitter Data Fetching Task Started');

    return { taskId: 'newTask.id' };
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

  @OnQueueError()
  async onError(job: Job) {
    console.log(
      `Error processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @OnQueueFailed()
  async onFailed(job: Job) {
    console.log(
      `Failed processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }
}
