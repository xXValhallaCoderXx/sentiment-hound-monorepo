import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { YoutubeService } from '../youtube/youtube.service';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class NaturalLanguageProcessingService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}
  async parseData(flatMap: any, comments: any): Promise<any | null> {
    const API_SERVER = this.configService.get<string>('API_SERVER');
    let sentimentResponseJson = {};
    try {
      const sentimentResponse = await fetch(
        `${API_SERVER}/analyze/tweet-bulk`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: flatMap,
            x: comments,
          }),
        },
      );
      sentimentResponseJson = await sentimentResponse.json();
    } catch (e) {
      console.log('ERROR', e);
    }
    return sentimentResponseJson;
  }
}
