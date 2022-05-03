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
    topic1.title = 'Test';
    topic1.description = 'Description';
    topic1.tags = ['tag1', 'tag2'];
    return [topic1];
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
