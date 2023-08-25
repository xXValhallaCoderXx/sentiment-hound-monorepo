import { IsNotEmpty, IsString } from 'class-validator';

export class AnalyzeSentimentDTO {
  @IsNotEmpty()
  @IsString()
  id: string;
}
