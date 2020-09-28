import * as mongoose from 'mongoose'
import { roleEnum } from '../enums/role.enum'

export const UserSchema = new mongoose.Schema({

    id : {type:String,required:true},
    name : {type:String, required:true},
    role:{type:[String], required:true, enum: Object.values(roleEnum)},
    password:{type:String, required:true}
})