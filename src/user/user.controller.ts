import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, UseGuards, UseInterceptors,SetMetadata } from '@nestjs/common';
import { Res, UploadedFile, Version } from '@nestjs/common/decorators';
import { BadRequestException } from '@nestjs/common/exceptions';
import { FileTypeValidator, MaxFileSizeValidator, ParseFilePipe } from '@nestjs/common/pipes';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import path = require('path')
import { Jwtguard } from 'src/auth/guards/jwt guard/jwt.guard';
import { Role } from './decorators/Role.decorator';
import { User_Postdto } from './dtos/post.dto';
import { UpdateUserdto } from './dtos/update.dto';
import { createUserdto } from './dtos/user.dto';
import { Roleguard } from './guards/role.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(public userserv:UserService){}

    // @Role('ADMIN','USER')
    // @UseGuards(Jwtguard,Roleguard)
    @Get()
    // @ApiResponse({
    //     status:405,
    //     description:'list of user'
    // })
    async users(){
        const Userlist=await this.userserv.userlist()
        return Userlist
    }
    @Get('/:id')
    // @UseInterceptors(Interceptor)
    async user(@Param('id',ParseIntPipe) userid:number){
        const User=await this.userserv.user(userid)
        if(User){
            return User
        }
        throw new NotFoundException('User not found')
    }

    @Post()
    @ApiBody({type:createUserdto})
    async createuser(@Body() body:createUserdto){
        const newuser=await this.userserv.Createuser(body)
        return newuser
    }

    @Put("/:id")
    async updateuser(@Body() body:UpdateUserdto , @Param('id',ParseIntPipe) id:number){
        const Userup=await this.userserv.Updateuser(body,id)
        return Userup;
    }

    @Delete('/:id')
    async deleteuser(@Param('id',ParseIntPipe) userid:number){
        const dltuser=await this.userserv.Deleteuser(userid)
        if(dltuser){
            return "User Deleted"
        }
        throw new NotFoundException('User not found')
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('image',{
        storage:diskStorage({
            destination:'./uploadfiles',
            filename:(req,file,cb)=>{
                const flname=path.parse(file.originalname).name
                const ext=path.parse(file.originalname).ext
                cb(null,`${flname}-${Date.now()}${ext}`)
            }
        }),
        fileFilter:(req,file,cb)=>{
                const flname=path.parse(file.originalname).name
                const ext=path.parse(file.originalname).ext
                if(ext !=='.png' ){
                    return cb(new BadRequestException('file type error'),false)
                }
                return cb(null,true)

        }
    }))
    uploadfile(@Body() body:any,@UploadedFile() image:Express.Multer.File){
        console.log(body,image);
    }

    @Get('image/:imgname')
    showfile(@Param('imgname') imgname:string,@Res() res){
        return res.sendfile(imgname,{root:'./uploadfiles'})
    }


    @Version('1')
    @Get('/test')
    test1(){
        return 'version1'
    }

    
    @Version('2')
    @Get('/test')
    test2(){
        return 'version2'
    }

}
