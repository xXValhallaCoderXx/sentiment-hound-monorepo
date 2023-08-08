import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsNumber,
  IsOptional,
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

  @IsString()
  thumbnail: string;

  @IsString()
  author: string;
}
