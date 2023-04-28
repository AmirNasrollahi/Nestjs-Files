import { Controller, Delete, Get, Post, Put,Body,Param,ParseIntPipe } from '@nestjs/common';
import { IsNumber } from 'class-validator';
import { Postdto } from './dto post/post.dto';
import { Updatepost } from './dto post/updatepost.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor(public postserv:PostService){}

    @Post('/:id')
    async createpost(@Body() body:Postdto,@Param('id',ParseIntPipe) id:number){
        const newpost= await this.postserv.createpost(body,id);
        return newpost;
    }

    @Delete('/:id')
    async removepost(@Param('id',ParseIntPipe) id:number){
        const post=await this.postserv.removepost(id)
        return post
    }

    @Put('/:id')
    async updatepost(@Body() body:Updatepost,@Param('id',ParseIntPipe) id:number){
        const post=await this.postserv.updatepost(body,id)
        return post
    }

    @Get()
    async showallpost(){
        const posts=await this.postserv.showallpost()
        return posts
    }

    @Get('/:id')
    async showpost(@Param('id',ParseIntPipe) userid:number){
        const post =await this.postserv.showpost(userid)
        return post
    }
}
