/// <reference types="multer" />
import { UpdateUserdto } from './dtos/update.dto';
import { createUserdto } from './dtos/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    userserv: UserService;
    constructor(userserv: UserService);
    users(): Promise<import("../typeorm/entitie/USERS").User[]>;
    user(userid: number): Promise<import("../typeorm/entitie/USERS").User>;
    createuser(body: createUserdto): Promise<import("../typeorm/entitie/USERS").User>;
    updateuser(body: UpdateUserdto, id: number): Promise<import("typeorm").UpdateResult>;
    deleteuser(userid: number): Promise<string>;
    uploadfile(body: any, image: Express.Multer.File): void;
    showfile(imgname: string, res: any): any;
    test1(): string;
    test2(): string;
}
