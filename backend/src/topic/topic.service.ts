import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { Topic } from './entities/topic.entity';

@Injectable()
export class TopicService {
  create(createTopicDto: CreateTopicDto) {
    return 'This action adds a new topic';
  }

  findAll() {
    let topic1 = new Topic();
    topic1.id = "1";
    topic1.title = 'Test Topic 1';
    topic1.description = 'This this the first topic';
    topic1.tags = ['tag1', 'tag2'];
    topic1.image = "http://localhost:3000/assets/img/news/recent1.jpg";

    let topic2 = new Topic();
    topic2.id = "1";
    topic2.title = 'Test Topic 2';
    topic2.description = 'This this the second topic';
    topic2.tags = ['tag1', 'tag2'];
    topic2.image = "http://localhost:3000/assets/img/news/recent2.jpg";

    let topic3 = new Topic();
    topic3.id = "1";
    topic3.title = 'Test Topic 3';
    topic3.description = 'This this the third topic';
    topic3.tags = ['tag1', 'tag2'];
    topic3.image = "http://localhost:3000/assets/img/news/recent3.jpg";

    let topic4 = new Topic();
    topic4.id = "1";
    topic4.title = 'Test Topic 4';
    topic4.description = 'This this the forth topic';
    topic4.tags = ['tag1', 'tag2'];
    topic4.image = "http://localhost:3000/assets/img/news/whatNews4.jpg";
    return [topic1, topic2, topic3, topic4];
  }

  findOne(id: number) {
    return `This action returns a #${id} topic`;
  }

  update(id: number, updateTopicDto: UpdateTopicDto) {
    return `This action updates a #${id} topic`;
  }

  remove(id: number) {
    return `This action removes a #${id} topic`;
  }
}
