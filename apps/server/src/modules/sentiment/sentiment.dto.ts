import { IsNotEmpty, IsString } from 'class-validator';

export class AnalyzeYoutubeVideoSentimentDTO {
  @IsNotEmpty()
  @IsString()
  videoId: string;
}
