import { Module } from '@nestjs/common';
import { TopicController } from './topic/topic.controller';
import { TopicService } from './topic/topic.service';
import { TopicModule } from './topic/topic.module';
import { PostModule } from './post/post.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
@Module({
  imports: [TopicModule, PostModule],
  controllers: [TopicController, PostController],
  providers: [TopicService, PostService],
})
export class AppModule {}
