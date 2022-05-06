import { Module } from '@nestjs/common';
import { TopicController } from './topic/topic.controller';
import { TopicService } from './topic/topic.service';
import { TopicModule } from './topic/topic.module';

@Module({
  imports: [
    TopicModule
  ],
  controllers: [TopicController],
  providers: [TopicService],
})
export class AppModule {}
