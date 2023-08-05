import { Process, Processor, OnQueueActive } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { DATA_FETCHING_QUEUE } from 'apps/server/shared/constants';

@Processor(DATA_FETCHING_QUEUE)
export class DataFetchingConsumer {
  private readonly logger = new Logger(DataFetchingConsumer.name);
  @Process()
  async bulkDataFetch() {
    this.logger.log('Start fetching data');
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }
}
