import { PrismaService } from 'prisma/prisma.service';
import { registerdto } from './dtos/register.dto';
export declare class AuthService {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    Createuser(data: registerdto): Promise<{
        id: number;
        email: string;
        name: string;
    }>;
    validate(Email: string, Password: string): Promise<import(".prisma/client").User>;
    validateuserbutoken(id: number): Promise<import(".prisma/client").User>;
    createtoken(userid: number, Token: any): Promise<import(".prisma/client").User>;
    removetoken(id: number): Promise<string>;
}
