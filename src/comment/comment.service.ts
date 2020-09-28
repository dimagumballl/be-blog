import { All, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCommentDto } from './dto/creat-comment.dto';
import { Model } from 'mongoose';
import { IComment } from './interfaces/comment.interface';

@Injectable()
export class CommentService {
    constructor(@InjectModel('Comment') private readonly commentModel: Model<IComment>){}
    
    async create( createCommentDto: CreateCommentDto): Promise<IComment>{
        const createdComment = new this.commentModel(createCommentDto)
        return await createdComment.save();
        
}
async getComments(): Promise<IComment[]> {
    const comments = await this.commentModel.find().exec();
    return comments;
}
async deleteComment(commentID): Promise<any> {
       const deletedComment = await this.commentModel.findByIdAndDelete(commentID);
       return deletedComment;
   }
   async deleteComments(): Promise<any> {
    const deletedComment = await this.commentModel.deleteMany(All);
    return deletedComment;
}   
async find(id: String): Promise<IComment>{
    return await this.commentModel.findById(id).exec();
} 
}
