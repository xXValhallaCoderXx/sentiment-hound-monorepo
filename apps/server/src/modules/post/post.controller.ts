import {
  Controller,
  Get,
  Param,
  Logger,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get("test")
  getTask(): any {
    return {
      message: "Hello World from server"
    }
  }
  
  @Get()
  getAllTasks(): any {
    return this.postService.findMany();
  }


}
