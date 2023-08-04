import { Controller, Get } from '@nestjs/common';
import { AspectService } from './aspect.service';

@Controller('aspect')
export class AspectController {
  constructor(private readonly aspectService: AspectService) {}

  @Get('count')
  getAllAspects(): any {
    return this.aspectService.getAllAspects();
  }
}
