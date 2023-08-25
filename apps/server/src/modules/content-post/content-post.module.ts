import { Module } from '@nestjs/common';
import { ContentPostService } from './content-post.service';
import { ContentPostRepository } from './content-post.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { ContentPostController } from './content-post.controller';
@Module({
  imports: [PrismaModule],
  controllers: [ContentPostController],
  providers: [ContentPostService, ContentPostRepository],
  exports: [ContentPostRepository],
})
export class ContentPostModule {}
