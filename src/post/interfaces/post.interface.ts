import {Document} from 'mongoose'

export interface IPost extends Document{
    readonly id: String;
    readonly title: String;
    readonly user: String;
    readonly body: String
}