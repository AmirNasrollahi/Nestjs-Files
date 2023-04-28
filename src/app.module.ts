import { Module,NestModule,MiddlewareConsumer,RequestMethod } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./typeorm/entitie/USERS";
import { Post } from "./typeorm/entitie/POST";


@Module({
    imports:[UserModule,PostModule,AuthModule,TypeOrmModule.forRoot({
        type:'postgres',
        host:'localhost',
        port:5432,
        username:'postgres',
        password:'',
        database:'test',
        entities:[User,Post],
        synchronize:true
    })]
})
export class AppModule {
    // configure(consumer:MiddlewareConsumer){
    //     consumer.apply(Middleware).forRoutes({path:'user',method:RequestMethod.GET})
    // }
}