import {Document} from 'mongoose'

export interface IUser extends Document{
    readonly id: String;
    readonly name: String;
    readonly role: Array<String>;
    readonly password: String    
}