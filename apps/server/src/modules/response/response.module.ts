import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseRepository } from './response.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [ResponseService, ResponseRepository],
  exports: [ResponseRepository],
})
export class ResponseModule {}
