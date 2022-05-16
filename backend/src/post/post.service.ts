import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { PostDTO } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new discussion';
  }

  async search(
    searchText?: string,
    category?: string,
    offset: number = 0,
    limit: number = 10,
  ) {
    const [result, total] = await this.postRepository.findAndCount({
      where: { title: Like('%' + searchText + '%') },
      order: { created: 'DESC' },
      take: limit,
      skip: offset,
    });

    return {
      posts: result,
      offset: offset,
      limit: limit,
      totalCount: total,
    };
  }

  findOne(id: number) {
    let post1 = new Post();
    post1.id = '1';
    post1.title = 'This is the first discussion';
    post1.description =
      'Here we will discuss how we can make more discussions on this web site';
    post1.author = 'admin';

    return PostDTO.fromEntity(post1);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
