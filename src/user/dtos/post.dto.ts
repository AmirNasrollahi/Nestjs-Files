import { IsEmail, IsNumber, IsString } from "class-validator"

export class User_Postdto{
    @IsString()
    first_name:string

    @IsString()
    last_name:string

    @IsString()
    age:number
}