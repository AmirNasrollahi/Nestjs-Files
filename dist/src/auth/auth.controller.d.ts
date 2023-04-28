import { AuthService } from './auth.service';
import { logindto } from './dtos/login.dto';
import { registerdto } from './dtos/register.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    Authserv: AuthService;
    jwtserv: JwtService;
    constructor(Authserv: AuthService, jwtserv: JwtService);
    Register(body: registerdto): Promise<{
        id: number;
        email: string;
        name: string;
    }>;
    Login(body: logindto, rqs: any): Promise<string>;
    profile(rqs: any): any;
    logout(rqs: any): Promise<{
        message: string;
    }>;
}
