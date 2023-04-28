import { IsEmail, IsString } from "class-validator"


export class registerdto{
    @IsString()
    name:string

    @IsString()
    email:string

    @IsString()
    password:string
}