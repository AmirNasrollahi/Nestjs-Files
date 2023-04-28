import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import {Reflector} from '@nestjs/core'

Injectable()
export class Roleguard implements CanActivate {

    constructor(public reflector:Reflector){}

    canActivate(context: ExecutionContext) {
        const { user } = context.switchToHttp().getRequest()
        console.log(user);

        const roles=this.reflector.get("roles",context.getHandler())
        
        return roles.some((role:string)=>{role === user.role})

    }
}