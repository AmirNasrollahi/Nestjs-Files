import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import {PassportStrategy} from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthService } from '../../auth.service';

@Injectable()
export class Authstrateghy extends PassportStrategy(Strategy){

    constructor(public Authserv:AuthService){
        super({usernameField:'email'})
    }


    async validate(email:string,password:string){
        const user=await this.Authserv.validate(email,password)
        if(user){
            return user
        }
        throw new NotFoundException('User with this email and password not found ')
    }

}