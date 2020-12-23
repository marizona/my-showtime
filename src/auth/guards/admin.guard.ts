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
import { map, switchMap } from 'rxjs/operators';
import { User } from '../../users/users.model';
import { rejects } from 'assert';
import { log } from 'util';

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
    // console.log(this.checkAdmin(user.user.email));
    console.log(
      this.checkAdmin(user.user.email).then((r) => {
        return r.valueOf();
      }),
    );
    this.checkAdmin(user.user.email).then((r) => {
      return r.valueOf();
    });
  }

  checkAdmin(email: string): boolean {
    return await this.userService.findByMail(email);
  }
}
