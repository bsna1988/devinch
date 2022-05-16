import { endianness } from "os";
import { Post } from "../entities/post.entity";

export class PostDTO implements Readonly<PostDTO> {
    id: string;
    title: string;
    description: string;
    author: string;
    commentsCount: number;

  public static fromEntity(entity: Post) {
    const  postDto = new PostDTO();
    postDto.id = entity.id;
    postDto.author = entity.author;
    postDto.description = entity.description;
    postDto.title = entity.title;
    postDto.commentsCount = 0;
    return postDto;
  }
}
