import { Module } from '@nestjs/common';
import path = require("path")
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(__dirname, '../../../.env'),
    }),
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
