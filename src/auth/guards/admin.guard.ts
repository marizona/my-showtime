import {
  CanActivate,
  ExecutionContext,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from '../../users/users.service';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject(forwardRef(() => UsersService))
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
    const result = this.checkAdmin(user.user.email);
    return result.then((admin) => {
      return admin;
    });
  }

  checkAdmin(email: string): Promise<boolean> {
    const user = this.userService.findByMail(email);
    return user.then((user) => {
      return user.admin;
    });
  }
}
