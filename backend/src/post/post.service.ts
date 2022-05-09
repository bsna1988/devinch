import { Injectable } from '@nestjs/common';
import { off } from 'process';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new discussion';
  }

  find(offset?: number, limit?: number) {
    let post1 = new Post();
    post1.id = '1';
    post1.title = 'This is the first discussion';
    post1.description =
      'Here we will discuss how we can make more discussions on this web site';
    post1.author = 'admin';
    post1.commentsCount = 0;

    let totalCount = 1;
    
    return {
      posts: [post1],
      offset: offset,
      limit: limit,
      totalCount: totalCount,
    };
  }

  findOne(id: number) {
    let post1 = new Post();
    post1.id = '1';
    post1.title = 'This is the first discussion';
    post1.description =
      'Here we will discuss how we can make more discussions on this web site';
    post1.author = 'admin';
    post1.commentsCount = 0;
    return post1;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
