import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class Jwtstrategy extends PassportStrategy(Strategy){

    constructor(public Authserv:AuthService){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:'amirali'
        })
    }

    async validate(payload:any){
        await this.Authserv.validateuserbutoken(payload.id)
        return {id:payload.id,name:payload.name,email:payload.email,role:payload.role}
    }

}