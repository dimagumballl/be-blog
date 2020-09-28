import { All, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { IPost } from './interfaces/post.interface';



@Injectable()
export class PostService {
    constructor(@InjectModel('Post') private readonly postModel: Model<IPost>){}
    
    async create( createPostDto: CreatePostDto): Promise<IPost>{
        const createdPost = new this.postModel(createPostDto)
        return await createdPost.save();
        
}
async getPosts(): Promise<IPost[]> {
    const posts = await this.postModel.find().exec();
    return posts;
}
async deletePost(postID): Promise<any> {
       const deletedPost = await this.postModel.findByIdAndDelete(postID);
       return deletedPost;
   }
   async deletePosts(): Promise<any> {
    const deletedPost = await this.postModel.deleteMany(All);
    return deletedPost;
}   
async find(id: String): Promise<IPost>{
    return await this.postModel.findById(id).exec();
} 
}
 