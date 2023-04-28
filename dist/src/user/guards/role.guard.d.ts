import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from '@nestjs/core';
export declare class Roleguard implements CanActivate {
    reflector: Reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): any;
}
