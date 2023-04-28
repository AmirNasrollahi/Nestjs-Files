import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Postdto } from './dto post/post.dto';
import { Updatepost } from './dto post/updatepost.dto';

@Injectable()
export class PostService {

    constructor(public prisma: PrismaService) { }

    async createpost(post: Postdto, id: number) {
        const newpost = this.prisma.post.create({
            data: {
                title: post.title,
                body: post.body,
                userid: id
            }
        })

        return newpost;
    }

    async removepost(id: number) {
        await this.prisma.post.delete({
            where: { id: id }
        })
        return "post Deleted"

    }

    async updatepost(body: Updatepost, id: number) {
        const post = await this.prisma.post.update({
            where: {
                id: id
            },
            data: {
                title: body.title
            },
            select: {
                title: true,
                userid: true
            }
        })
        return post

    }

    async showallpost() {
        const posts= await this.prisma.post.findMany()
        return posts
    }

    async showpost(Userid:number){
        const post= await this.prisma.post.findMany({
            where:{
                userid:Userid
            },
            select:{
                // user:true,
                id:true,
                title:true,
            }
        })
        return post
    }

}
