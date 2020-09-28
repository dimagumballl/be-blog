import {Document} from 'mongoose'

export interface IComment extends Document{
    readonly newid:String;
    readonly id: String;
    readonly userid: String;
    readonly user: String;
    readonly body: String
}