import { Module } from '@nestjs/common';
import { ContentPostService } from './content-post.service';
import { ContentPostRepository } from './content-post.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [ContentPostService, ContentPostRepository],
  exports: [ContentPostRepository],
})
export class ContentPostModule {}
