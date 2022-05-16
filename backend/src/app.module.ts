import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { PostModule } from './post/post.module';
import { TopicModule } from './topic/topic.module';
import { configService } from './config/config.service';

@Module({
  imports: [
    TopicModule,
    PostModule,
    CategoryModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
})
export class AppModule {}
