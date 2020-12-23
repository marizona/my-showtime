import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from '../../users/users.service';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UsersService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const admin = this.reflector.get<boolean>('admin', context.getHandler());
    if (!admin) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log(request);
    return true;
    // return matchRoles(admin, user.admin);
  }
}
