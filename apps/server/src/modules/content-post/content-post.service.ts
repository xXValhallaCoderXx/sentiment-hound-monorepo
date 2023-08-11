import { Injectable } from '@nestjs/common';
import { ContentPostRepository } from './content-post.repository';

@Injectable()
export class ContentPostService {
  constructor(private contentPostRepository: ContentPostRepository) {}

  async getContentPostWithSentiment() {
    return await this.contentPostRepository.getAllContentPosts({
      where: { responses: { some: { sentiment: { not: null } } } },
    });
  }

  async getContentPostWithResponses(id: string) {
    return await this.contentPostRepository.getContentPost({
      where: { id },
      include: { responses: true },
    });
  }
}
