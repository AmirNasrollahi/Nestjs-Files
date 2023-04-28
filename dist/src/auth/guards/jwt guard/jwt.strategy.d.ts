import { Strategy } from "passport-jwt";
import { AuthService } from "src/auth/auth.service";
declare const Jwtstrategy_base: new (...args: any[]) => Strategy;
export declare class Jwtstrategy extends Jwtstrategy_base {
    Authserv: AuthService;
    constructor(Authserv: AuthService);
    validate(payload: any): Promise<{
        id: any;
        name: any;
        email: any;
        role: any;
    }>;
}
export {};
