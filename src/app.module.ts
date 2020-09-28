import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';

import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';


const environment = process.env.NODE_ENV || 'development';

@Module({
  imports: 
  [PostModule, 
  UserModule,

  ConfigModule.forRoot({
    envFilePath: `.env.${environment}`,
    isGlobal: true
  }),
  MongooseModule.forRoot(
    process.env.MONGODB_WRITE_CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  ),
  CommentModule
],
})
export class AppModule {}
