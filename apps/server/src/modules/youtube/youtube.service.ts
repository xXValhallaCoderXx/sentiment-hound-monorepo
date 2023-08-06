import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { FetchVideoCommentDTO, VideoDetailDTO } from './youtube.dto';

interface IFetchAllComentsResponse {
  data: {
    kind: string;
    etag: string;
    pageInfo: { totalResults: number; resultsPerPage: number };
    items: string[];
  };
}

@Injectable()
export class YoutubeService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  async fetchAllVideoComments(data: FetchVideoCommentDTO): Promise<any | null> {
    const videoId = data.videoId;
    const YOUTUBE_API_KEY = this.configService.get<string>('YOUTUBE_API_KEY');
    const API_URL = this.configService.get<string>('YOUTUBE_BASE_API');

    const url = `${API_URL}/commentThreads?key=${YOUTUBE_API_KEY}&maxResults=${
      data.size ?? 100
    }&part=snippet,replies&videoId=${videoId}`;

    const videoCommentsResponse = await this.httpService.axiosRef.get<
      any,
      IFetchAllComentsResponse
    >(url);
    console.log('WHAT IS THIS');

    return videoCommentsResponse.data;
  }

  async fetchVideoDetails(data: FetchVideoCommentDTO): Promise<VideoDetailDTO> {
    const videoId = data.videoId;
    const YOUTUBE_API_KEY = this.configService.get<string>('YOUTUBE_API_KEY');
    const API_URL = this.configService.get<string>('YOUTUBE_BASE_API');
    const videoMetaData = `${API_URL}/videos?key=${YOUTUBE_API_KEY}&part=snippet&id=${videoId}`;
    const videoMetaResponse = await this.httpService.axiosRef.get(
      videoMetaData,
    );
    const videoDetails = videoMetaResponse.data?.items[0];
    return {
      id: videoDetails?.id,
      title: videoDetails?.snippet?.title,
      description: videoDetails?.snippet?.description,
      publishedAt: videoDetails?.snippet?.publishedAt,
      thumbnail: videoDetails.snippet?.thumbnails?.high,
      author: videoDetails?.snippet?.channelTitle,
    };
  }

  async fetchVideoComments(): Promise<any | null> {
    const videoId = 'nSlodG96u4c';

    const YOUTUBE_API_KEY = this.configService.get<string>('YOUTUBE_API_KEY');

    const API_URL = 'https://www.googleapis.com/youtube/v3';

    const url = `${API_URL}/commentThreads?key=${YOUTUBE_API_KEY}&maxResults=100&part=snippet,replies&videoId=${videoId}`;

    const videoMetaData = `${API_URL}/videos?key=${YOUTUBE_API_KEY}&part=snippet&id=${videoId}`;

    const videoCommentsResponse = await this.httpService.axiosRef.get(url);
    const videoMetaResponse = await this.httpService.axiosRef.get(
      videoMetaData,
    );

    let count = -1;
    const commentMapping = new Set();
    const flatMap: string[] = [];
    const comments = videoCommentsResponse?.data?.items.map((comment: any) => {
      let replies = [];

      if (comment.replies !== undefined) {
        replies = comment.replies.comments.map((reply: any) => {
          count++;
          commentMapping.add({ count, id: reply.id });
          flatMap.push(reply.snippet.textOriginal);

          return {
            comment: reply.snippet.textOriginal,
            author: reply.snippet.authorDisplayName,
            likes: reply.snippet.likeCount,
            updatedAt: reply.snippet.updatedAt,
            publishedAt: reply.snippet.publishedAt,
            id: reply.id,
          };
        });
      }
      count++;
      commentMapping.add({ count, id: comment.snippet.topLevelComment.id });

      flatMap.push(
        comment.snippet.topLevelComment.snippet.textOriginal.slice(0, 512),
      );
      return {
        author: comment.snippet.topLevelComment.snippet.authorDisplayName,
        comment: comment.snippet.topLevelComment.snippet.textOriginal,
        likes: comment.snippet.topLevelComment.snippet.likeCount,
        publishedAt: comment.snippet.topLevelComment.snippet.publishedAt,
        updatedAt: comment.snippet.topLevelComment.snippet.updatedAt,
        id: comment.snippet.topLevelComment.id,
        replies,
      };
    });

    return { comments, flatMap, contentPost: videoMetaResponse.data.items[0] };
  }
}
