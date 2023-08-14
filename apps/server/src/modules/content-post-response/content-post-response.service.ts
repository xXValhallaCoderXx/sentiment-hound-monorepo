import { Injectable } from '@nestjs/common';
import { ResponseRepository } from './content-post-response.repository';

@Injectable()
export class ContentPostResponseService {
  constructor(private responseRepository: ResponseRepository) {}
  async getContentResponses(id: string) {
    const results = await this.responseRepository.findAll({
      where: { contentPostId: id },
    });
    return results;
  }
}
