import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class FetchVideoCommentDTO {
  @IsNotEmpty()
  @IsString()
  videoId: string;
}

export class VideoDetailDTO {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsDate()
  publishedAt: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  thumbnail: string;

  @IsString()
  author: string;
}
