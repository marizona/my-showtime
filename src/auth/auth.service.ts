import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { from, Observable, of } from 'rxjs';
import { User } from '../users/users.model';
import * as bcrypt from 'bcrypt';
import config from '../config/keys';
import jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly JwtService: JwtService) {}

  generateJWT(user: User): Observable<string> {
    return from(this.JwtService.signAsync({ user }));
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  comparePasswords(newPassword: string, passwordHash: string): Observable<any> {
    return of<any | boolean>(bcrypt.compare(newPassword, passwordHash));
  }
}
