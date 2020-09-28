import * as mongoose from 'mongoose'


export const CommentSchema = new mongoose.Schema({
    newid:{type:String,required:true},
    id : {type:String,required:true},
    userid : {type:String, required:true},
    user : {type: String, required:true},
    body: {type:String, required:true}
})