import { Strategy } from 'passport-local';
import { AuthService } from '../../auth.service';
declare const Authstrateghy_base: new (...args: any[]) => Strategy;
export declare class Authstrateghy extends Authstrateghy_base {
    Authserv: AuthService;
    constructor(Authserv: AuthService);
    validate(email: string, password: string): Promise<import(".prisma/client").User>;
}
export {};
