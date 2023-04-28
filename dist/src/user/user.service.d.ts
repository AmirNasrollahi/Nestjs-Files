import { Post } from 'src/typeorm/entitie/POST';
import { User } from 'src/typeorm/entitie/USERS';
import { Repository } from 'typeorm';
import { User_Postdto } from './dtos/post.dto';
import { UpdateUserdto } from './dtos/update.dto';
import { createUserdto } from './dtos/user.dto';
export declare class UserService {
    private userrepository;
    private postrepository;
    constructor(userrepository: Repository<User>, postrepository: Repository<Post>);
    userlist(): Promise<User[]>;
    user(Userid: number): Promise<User>;
    Createuser(user: createUserdto): Promise<User>;
    Updateuser(body: UpdateUserdto, id: number): Promise<import("typeorm").UpdateResult>;
    Deleteuser(id: number): Promise<import("typeorm").DeleteResult>;
    CreateUserPost(id: number, postdetails: User_Postdto): Promise<User>;
}
