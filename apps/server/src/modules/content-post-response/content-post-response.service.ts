import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentPostResponseService {
  getHello(): string {
    return 'Hello World!';
  }
}
