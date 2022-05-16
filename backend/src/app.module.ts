import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { PostModule } from './post/post.module';
import { TopicModule } from './topic/topic.module';
import { Post } from './post/entities/post.entity';
require('dotenv').config();

@Module({
  imports: [
    TopicModule,
    PostModule,
    CategoryModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.devinch,
      entities: [Post],
      synchronize: false,
    }),
  ],
})
export class AppModule {}
