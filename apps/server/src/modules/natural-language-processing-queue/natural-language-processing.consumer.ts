import {
  Process,
  Processor,
  OnQueueActive,
  OnQueueCompleted,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { NLP_PROCESSING_QUEUE } from 'apps/server/shared/constants';
import { YoutubeService } from '../youtube/youtube.service';
import { TaskRepository } from '../task/task.repository';
import { ContentPostRepository } from '../content-post/content-post.repository';
import { ResponseRepository } from '../response/response.repository';

@Processor(NLP_PROCESSING_QUEUE)
export class NaturalLanguageProcessingConsumer {
  constructor(
    private readonly youtubeService: YoutubeService,
    private readonly taskRepository: TaskRepository,
    private readonly contentPostRepository: ContentPostRepository,
    private readonly responseRepository: ResponseRepository,
  ) {}
  private readonly logger = new Logger(NaturalLanguageProcessingConsumer.name);
  @Process('async-sentiment-process')
  async bulkDataProcess(job: Job) {
    this.logger.log('Asyns Sentiment Process Started');
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
