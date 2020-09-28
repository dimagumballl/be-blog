export class CreateUserDto{
    readonly id: String;
    readonly name: String;
    readonly role: Array<String>;
    readonly password: String    
}