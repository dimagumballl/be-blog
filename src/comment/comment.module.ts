import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CommentSchema } from './schemas/comment.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Comment',schema:CommentSchema}])],
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}
