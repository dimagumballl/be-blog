import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';
import {PostService} from './post.service'
import { CreatePostDto } from './dto/create-post.dto';

@Controller('post')
export class PostController {

    constructor(private postService: PostService) { }
    @Get('posts')
   async getPosts(@Res() res) {
       const posts = await this.postService.getPosts();
       return res.status(HttpStatus.OK).json(posts);
   }

   @Get('post/:postID')
   async getPost(@Res() res, @Param('postID', new ValidateObjectId()) postID) {
       const post = await this.postService.find(postID);
       if (!post) throw new NotFoundException('Post does not exist!');
       return res.status(HttpStatus.OK).json(post);

   }
   @Post('/post')
   async addPost(@Res() res, @Body() createPostDto: CreatePostDto) {
       const newPost = await this.postService.create(createPostDto);
       return res.status(HttpStatus.OK).json({
           message: "Post has been submitted successfully!",
           post: newPost,
           
       })
   }
   @Delete('delete')
   async deletePosts(@Res() res) {
       const deletedPost = await this.postService.deletePosts();
       if (!deletedPost) throw new NotFoundException('Post does not exist!');
	 
       return res.status(HttpStatus.OK).json({
           message: 'Post has been deleted!',
           post: deletedPost
       })
   }
   @Delete('deleteone/:postID')
   async deletePost(@Param() params) {
       const deletedPost = await this.postService.deletePost(params.postID);
       if (!deletedPost) throw new NotFoundException('Post does not exist!');
       return 
           post: deletedPost
   }

}
