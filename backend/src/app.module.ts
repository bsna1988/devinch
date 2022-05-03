import { Module } from '@nestjs/common';
import { TopicController } from './topic/topic.controller';
import { TopicService } from './topic/topic.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TopicModule } from './topic/topic.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    TopicModule,
  ],
  controllers: [TopicController],
  providers: [TopicService],
})
export class AppModule {}
