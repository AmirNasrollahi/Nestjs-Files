import { IsEmail, IsString } from "class-validator"

export class UpdateUserdto{
    @IsEmail()
    Email:string
}