import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString,Length } from "class-validator"

export class createUserdto{
    @IsEmail()
    @ApiProperty({type:String,description:'Email of user'})
    email:string 

    @IsString()
    @Length(5,25)
    @ApiProperty({type:String,description:'password of user'})
    password:string
}