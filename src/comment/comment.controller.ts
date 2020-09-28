import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/creat-comment.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('comment')
export class CommentController {

    constructor(private commentService: CommentService) { }
    @Get('comments')
   async getComments(@Res() res) {
       const comments = await this.commentService.getComments();
       return res.status(HttpStatus.OK).json(comments);
   }

   @Get('comment/:commentID')
   async getComment(@Res() res, @Param('commentID', new ValidateObjectId()) commentID) {
       const comment = await this.commentService.find(commentID);
       if (!comment) throw new NotFoundException('Comment does not exist!');
       return res.status(HttpStatus.OK).json(comment);

   }
   @Post('/comment')
   async addComment(@Res() res, @Body() createCommentDto: CreateCommentDto) {
       const newComment = await this.commentService.create(createCommentDto);
       return res.status(HttpStatus.OK).json({
           message: "Comment has been submitted successfully!",
           comment: newComment,
           
       })
   }
   @Delete('delete')
   async deleteComments(@Res() res) {
       const deletedComment = await this.commentService.deleteComments();
       if (!deletedComment) throw new NotFoundException('Comment does not exist!');
	 
       return res.status(HttpStatus.OK).json({
           message: 'Comment has been deleted!',
           comment: deletedComment
       })
   }
   @Delete('deleteone/:commentID')
   async deleteComment(@Param() params) {
       const deletedComment = await this.commentService.deleteComment(params.commentID);
       if (!deletedComment) throw new NotFoundException('Comment does not exist!');
       return 
           comment: deletedComment
   }

}
