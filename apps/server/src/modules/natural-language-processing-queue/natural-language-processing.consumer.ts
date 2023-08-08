/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Process,
  Processor,
  OnQueueActive,
  OnQueueCompleted,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { NLP_PROCESSING_QUEUE } from 'apps/server/shared/constants';
import { TaskRepository } from '../task/task.repository';
import { ResponseRepository } from '../response/response.repository';
import { NaturalLanguageProcessingService } from '../natural-language-processing/natural-language-processing.service';

@Processor(NLP_PROCESSING_QUEUE)
export class NaturalLanguageProcessingConsumer {
  constructor(
    private readonly nlpService: NaturalLanguageProcessingService,
    private readonly taskRepository: TaskRepository,
    private readonly responseRepository: ResponseRepository,
  ) {}
  private readonly logger = new Logger(NaturalLanguageProcessingConsumer.name);
  @Process('async-sentiment-process')
  async bulkDataProcess(job: Job) {
    this.logger.log('Analyzing Sentiment Started');
    const { taskId } = job.data;
    const task = await this.taskRepository.findUnique({
      where: {
        id: taskId,
      },
      include: {
        contentPost: {
          include: {
            responses: true,
          },
        },
      },
    });

    // @ts-ignore
    const responses = task?.contentPost?.responses;
    const parsedResponses = responses?.map((response: any) => ({
      id: response.id,
      content: response.content,
    }));
    this.logger.log('Sentiment Parsing Completed');

    await this.taskRepository.updateTask({
      where: {
        id: taskId,
      },
      data: {
        status: 'analyzing-sentiment',
      },
    });

    const response = await this.nlpService.analyzeSentiment(parsedResponses);
    this.logger.log('Sentiment Analyzed');

    const updatedResponses = response.map((res: any) => ({
      id: res.id,
      sentiment: res.sentiment,
    }));

    for (const res of updatedResponses) {
      await this.responseRepository.update({
        where: {
          id: res.id,
        },
        data: {
          sentiment: res.sentiment.toLowerCase(),
        },
      });
    }
    this.logger.log('Sentiment Saved');
    await this.taskRepository.updateTask({
      where: {
        id: taskId,
      },
      data: {
        status: 'completed',
      },
    });
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
