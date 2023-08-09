import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsNumber,
  IsOptional,
  IsObject,
} from 'class-validator';

export class FetchVideoCommentDTO {
  @IsNotEmpty()
  @IsString()
  videoId: string;

  @IsOptional()
  @IsNumber()
  size?: number;

  @IsOptional()
  @IsString()
  pageToken?: string;
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

  @IsObject()
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };

  @IsString()
  author: string;
}
