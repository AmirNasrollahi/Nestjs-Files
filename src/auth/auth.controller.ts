import { Body, Controller, Post, Request, UseGuards,Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { logindto } from './dtos/login.dto';
import { registerdto } from './dtos/register.dto';
import {JwtService} from '@nestjs/jwt';
import { Authguarde } from './guards/login auth guard/auth.guard';
import { Jwtguard } from './guards/jwt guard/jwt.guard';

@Controller('auth')
export class AuthController {

    constructor(public Authserv:AuthService,public jwtserv:JwtService){}

    @Post('/register')
    async Register(@Body() body:registerdto){
        const user=await this.Authserv.Createuser(body)
        return user
    }

    @UseGuards(Authguarde)
    @Post('/login')
    async Login(@Body() body:logindto,@Request() rqs){
        const Token=this.jwtserv.sign({
            id:rqs.user.id,
            name:rqs.user.name,
            email:rqs.user.email,
            role:rqs.user.role
        })
        await this.Authserv.createtoken(rqs.user.id,Token)

        return "Token saved"
    }


    @UseGuards(Jwtguard)
    @Get('/profile')
    profile(@Request() rqs){
        return rqs.user
    }

    @UseGuards(Jwtguard)
    @Post('/logout')
    async logout(@Request() rqs){

        await this.Authserv.removetoken(rqs.user.id)

        return {message:'User Logout'}
    }
}
