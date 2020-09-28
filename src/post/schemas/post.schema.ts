import * as mongoose from 'mongoose'


export const PostSchema = new mongoose.Schema({

    id : {type:String,required:true},
    title : {type:String, required:true},
    user : {type: String, required:true},
     body: {type:String, required:true}
})