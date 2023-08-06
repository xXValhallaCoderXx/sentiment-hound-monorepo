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
    this.logger.log('Start fetching datasss', JSON.stringify(job));
    const youtubeDetails = await this.youtubeService.fetchVideoDetails(
      job.data,
    );
    const x = await this.contentPostRepository.createContentPost({
      data: {
        contentId: youtubeDetails.id,
        platform: 'youtube',
        author: youtubeDetails.author,
      },
    });
    console.log('x ', x);
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
