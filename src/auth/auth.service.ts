import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { registerdto } from './dtos/register.dto';
import * as bcrypt from 'bcrypt'
import { logindto } from './dtos/login.dto';
import passport from 'passport';

@Injectable()
export class AuthService {

    constructor(public prisma:PrismaService){}

    async Createuser(data:registerdto){

        const password= await bcrypt.hash(data.password,10)
        const User=await this.prisma.user.create({
            data:{
                name:data.name,
                email:data.email,
                password:password
            },
            select:{
                id:true,
                name:true,
                email:true
            }
        })
        return User;
    }

    async validate(Email:string,Password:string){
        const User=await this.prisma.user.findUnique({
            where:{
                email:Email
            }
        })

        if(!User){
            throw new BadRequestException()
        }

        if(!await bcrypt.compare(Password,User.password)){
            throw new UnauthorizedException()
        }


        else{
            return User
        }

    }

    async validateuserbutoken(id:number){
        const User=await this.prisma.user.findUnique({
            where:{
                id:id
            }
        })

        if(!User || User.token=== null){
            throw new UnauthorizedException()
        }

        else{
            return User
        }

    }

    async createtoken(userid:number,Token:any){

        const user=await this.prisma.user.update({
            where:{
                id:userid
            },
            data:{
                token:Token
            }
        })

        return user

    }
    
    async removetoken(id:number){
        const user=await this.prisma.user.update({
            where:{
                id
            },
            data:{
                token:null
            }
        })

        return "Removed Token"
    }

}
