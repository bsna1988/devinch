import { Module } from '@nestjs/common';
import { TopicController } from './topic/topic.controller';
import { TopicService } from './topic/topic.service';
import { TopicModule } from './topic/topic.module';
import { PostModule } from './post/post.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { CategoryModule } from './category/category.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
@Module({
  imports: [TopicModule, PostModule, CategoryModule],
  controllers: [TopicController, PostController, CategoryController],
  providers: [TopicService, PostService, CategoryService],
})
export class AppModule {}
