import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentPostService {
  getHello(): string {
    return 'Hello World!';
  }
}
