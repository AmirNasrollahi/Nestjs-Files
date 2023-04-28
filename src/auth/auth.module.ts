import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {PassportModule} from '@nestjs/passport'
import { Authstrateghy } from './guards/login auth guard/local.strateghy';
import { JwtModule } from '@nestjs/jwt';
import { Jwtstrategy } from './guards/jwt guard/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService,Authstrateghy,Jwtstrategy],
  imports:[PrismaModule,PassportModule,JwtModule.register({
    secret:"amirali",
    signOptions:{expiresIn:"1d"}
  })]
})
export class AuthModule {}

//,{provide:APP_GUARD,useClass:Authguarde},Authstrateghy

//,PassportModule
