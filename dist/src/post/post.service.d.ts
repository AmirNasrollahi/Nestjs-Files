import { PrismaService } from 'prisma/prisma.service';
import { Postdto } from './dto post/post.dto';
import { Updatepost } from './dto post/updatepost.dto';
export declare class PostService {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    createpost(post: Postdto, id: number): Promise<import(".prisma/client").Post>;
    removepost(id: number): Promise<string>;
    updatepost(body: Updatepost, id: number): Promise<{
        title: string;
        userid: number;
    }>;
    showallpost(): Promise<import(".prisma/client").Post[]>;
    showpost(Userid: number): Promise<{
        id: number;
        title: string;
    }[]>;
}
