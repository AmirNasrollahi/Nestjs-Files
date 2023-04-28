import { IsEmail, IsString } from "class-validator"


export class logindto{
    @IsEmail()
    email:string

    @IsString()
    password:string
}