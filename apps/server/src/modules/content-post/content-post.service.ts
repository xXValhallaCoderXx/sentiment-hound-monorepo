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
    const data = await this.contentPostRepository.getContentPost({
      where: { id },
      include: { responses: true },
    });
    const sentimentCounts: any = {
      positive: 0,
      negative: 0,
      neutral: 0,
    };
    // @ts-ignore
    data?.responses?.forEach((response: any) => {
      console.log('SENTOMENT: ', response.sentiment);
      sentimentCounts[response.sentiment]++;
    });

    return {
      ...data,
      sentimentCounts,
    };
  }
}
