import { Module } from '@nestjs/common';
import { AspectService } from './aspect.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AspectController } from './aspect.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AspectController],
  providers: [AspectService],
})
export class AspectModule {}
