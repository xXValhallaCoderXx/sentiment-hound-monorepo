import { Module } from '@nestjs/common';
import { ContentPostResponseService } from './content-post-response.service';
import { ResponseRepository } from './content-post-response.repository';
import { ContentPostResponseController } from './content-post-response.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ContentPostResponseController],
  providers: [ContentPostResponseService, ResponseRepository],
  exports: [ResponseRepository],
})
export class ContentPostResponseModule {}
