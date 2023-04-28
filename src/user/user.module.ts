import { Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { profile } from 'console';
import { PrismaModule } from 'prisma/prisma.module';
import { Post } from 'src/typeorm/entitie/POST';
import { User } from 'src/typeorm/entitie/USERS';
import { Roleguard } from './guards/role.guard';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports:[PrismaModule,TypeOrmModule.forFeature([User,Post])]
})
export class UserModule {}
