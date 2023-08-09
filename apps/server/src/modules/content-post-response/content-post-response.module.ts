import { Module } from '@nestjs/common';
import { ContentPostResponseService } from './content-post-response.service';
import { ResponseRepository } from './content-post-response.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [ContentPostResponseService, ResponseRepository],
  exports: [ResponseRepository],
})
export class ContentPostResponseModule {}
