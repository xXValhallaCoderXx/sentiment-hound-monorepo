import { Module } from '@nestjs/common';
import { NaturalLanguageProcessingService } from './natural-language-processing.service';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [NaturalLanguageProcessingService],
  exports: [NaturalLanguageProcessingService],
})
export class NaturalLanguageProcessingModule {}
