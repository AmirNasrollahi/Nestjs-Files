import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrismaService } from 'prisma/prisma.service';
import { Post } from 'src/typeorm/entitie/POST';
import { User } from 'src/typeorm/entitie/USERS';
import { Repository } from 'typeorm';
import { User_Postdto } from './dtos/post.dto';
import { UpdateUserdto } from './dtos/update.dto';
import { createUserdto } from './dtos/user.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userrepository:Repository<User>,
    @InjectRepository(Post) private postrepository:Repository<Post>
    ){}

    async userlist(){
        const Userlist=await this.userrepository.find({relations:['post']})
        return Userlist
    }

    async user(Userid:number){
        const User=await this.userrepository.findOne({
            where:{
                id:Userid
            }
        })
        return User
    }

    async Createuser(user:createUserdto){
        const User=await this.userrepository.create({
                Email:user.email,
                password:user.password,
                createat:new Date()
        })
        await this.userrepository.save(User);
        return User;
    }

    async Updateuser(body:UpdateUserdto,id:number){
        const updateduser=await this.userrepository.update({id},{ ...body})
        return updateduser;
    }

    async Deleteuser(id:number){
        const User=await this.userrepository.delete({id})
        return User
    }

    async CreateUserPost(id:number,postdetails:User_Postdto){
        const user=await this.userrepository.findOneBy({id})
        if(!user){
            throw new BadRequestException()
        }

        const createpost=this.postrepository.create({...postdetails})
        const newpost=await this.postrepository.save(createpost);
        user.post=newpost
        this.userrepository.save(user)
        return user
    }
}
