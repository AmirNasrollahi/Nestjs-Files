import { CanActivate, ExecutionContext } from '@nestjs/common'
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class Authguard implements CanActivate{

    canActivate(context: ExecutionContext){
        // const request = context.switchToHttp().getRequest();
        
        // console.log(request);
        // console.log("Auth Guard ...");
        
        return true
    }


}

