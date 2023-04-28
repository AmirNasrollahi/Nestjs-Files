import {  IsString } from "class-validator"

export class Postdto{
    @IsString()
    title:string

    @IsString()
    body:string
}