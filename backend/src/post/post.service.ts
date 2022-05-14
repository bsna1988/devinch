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

  find(searchText?: string, offset?: number, limit?: number) {
    let post1 = new Post();
    post1.id = '1';
    post1.title = 'This is the first discussion';
    post1.description =
      'Here we will discuss how we can make more discussions on this web site';
    post1.author = 'admin';
    post1.commentsCount = 0;

    let post2 = new Post();
    post2.id = '2';
    post2.title = 'This is the second discussion';
    post2.description =
      'Here we will discuss how we can make more discussions on this web site';
    post2.author = 'admin';
    post2.commentsCount = 0;

    let totalCount = 2;

    return {
      posts: [offset > 0 ? post2 : post1],
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
