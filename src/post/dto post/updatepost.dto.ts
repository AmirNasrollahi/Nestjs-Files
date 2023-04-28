import { IsString } from "class-validator";

export class Updatepost{
    @IsString()
    title:string
}