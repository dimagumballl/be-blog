import { All, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
import * as _ from 'lodash'

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>){}

    async create(createUserDto: CreateUserDto): Promise<IUser>{
            const createdUser = new this.userModel(createUserDto) 
            return await createdUser.save();
    }
    async findN(data): Promise<IUser>{
        const n:String = data.name
        const p:String = data.password
        console.log(n)
        return await this.userModel.findOne(n, p).exec();
    }
    async find(id: String): Promise<IUser>{

            return await this.userModel.findById(id).exec();
    }
    async getUsers(): Promise<IUser[]> {
        const posts = await this.userModel.find().exec();
        return posts;
    }
    async deleteUsers(): Promise<any> {
        const deletedUser = await this.userModel.deleteMany(All);
        return deletedUser;
    }    
}
