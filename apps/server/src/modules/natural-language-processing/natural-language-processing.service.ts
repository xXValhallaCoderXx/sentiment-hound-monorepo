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
    console.log('API_SERVER', API_SERVER);
    let sentimentResponseJson = {};
    try {
      sentimentResponseJson = await this.httpService.axiosRef.post(
        `http://127.0.0.1:8000/analyze/tweet-bulk`,
        {
          data: flatMap,
          x: comments,
        },
      );
      // const sentimentResponse = await fetch(
      //   `${API_SERVER}/analyze/tweet-bulk`,
      //   {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       data: flatMap,
      //       x: comments,
      //     }),
      //   },
      // );
    } catch (e) {
      console.log('ERROR', e);
    }
    return sentimentResponseJson;
  }
}
