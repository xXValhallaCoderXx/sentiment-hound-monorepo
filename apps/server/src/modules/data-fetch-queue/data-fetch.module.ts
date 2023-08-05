import { Module } from '@nestjs/common';

import { DataFetchingConsumer } from './data-fetch.consumer';

@Module({
  imports: [],
  controllers: [],
  providers: [DataFetchingConsumer],
})
export class DataFetchingModule {}
