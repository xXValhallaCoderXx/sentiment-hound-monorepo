import { Injectable } from '@nestjs/common';

@Injectable()
export class AspectService {
  getHello(): string {
    return 'Hello World!';
  }
}
