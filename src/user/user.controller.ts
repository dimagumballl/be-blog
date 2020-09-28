import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get('userget/:userdata')
    async getUser(@Res() res,@Param('userdata') userdata) {
        const GetUser = await this.userService.findN(userdata);
        if (!GetUser) throw new NotFoundException('');
        return res.status(HttpStatus.OK).json(GetUser);
            
            
        
   }

   @Get('users')
   async getUsers(@Res() res) {
       const posts = await this.userService.getUsers();
       return res.status(HttpStatus.OK).json(posts);
   }

   @Post('/user')
   async addPost(@Res() res, @Body() createUserDto: CreateUserDto) {
       const newUser = await this.userService.create(createUserDto);
       return res.status(HttpStatus.OK).json({
           message: "User has been submitted successfully!",
           post: newUser,
       })
   }
   @Delete('delete')
   async deleteUsers(@Res() res) {
       const deletedUser = await this.userService.deleteUsers();
       if (!deletedUser) throw new NotFoundException('Post does not exist!');
	 
       return res.status(HttpStatus.OK).json({
           user: deletedUser
       })
   }

}

