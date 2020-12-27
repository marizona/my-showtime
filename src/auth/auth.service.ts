import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { from, Observable, of } from 'rxjs';
import { User } from '../users/users.model';
import * as bcrypt from 'bcrypt';
import config from '../config/keys';
import jwt from 'jsonwebtoken';
import { request, response } from "express";
import { ExtractJwt } from 'passport-jwt';

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


  retrieveUser() {
    const req = request;
    // const header = new Headers();
    // const req = header.get('authorization');
    // const req = decode(ExtractJwt.fromAuthHeaderAsBearerToken().toString())
    // console.log('Request');
    console.log(req);
    // console.log('After req');
    // const token = ExtractJwt.fromAuthHeader();
    // console.log(token);
    // this.JwtService.verify(token);
  }
}
