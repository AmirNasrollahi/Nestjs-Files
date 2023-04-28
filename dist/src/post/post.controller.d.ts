import { Postdto } from './dto post/post.dto';
import { Updatepost } from './dto post/updatepost.dto';
import { PostService } from './post.service';
export declare class PostController {
    postserv: PostService;
    constructor(postserv: PostService);
    createpost(body: Postdto, id: number): Promise<import(".prisma/client").Post>;
    removepost(id: number): Promise<string>;
    updatepost(body: Updatepost, id: number): Promise<{
        title: string;
        userid: number;
    }>;
    showallpost(): Promise<import(".prisma/client").Post[]>;
    showpost(userid: number): Promise<{
        id: number;
        title: string;
    }[]>;
}
