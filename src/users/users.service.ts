import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';

import { User } from './users.model';
import { AuthService } from '../auth/auth.service';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private authService: AuthService,
  ) {}

  async insertUser(
    username: string,
    email: string,
    password: string,
    admin: boolean,
  ) {
    // const salt = await bcrypt.genSalt();
    // const hash = await bcrypt.hash(password, salt);
    // console.log(this.authService.hashPassword(password));
    const newUser = new this.userModel({
      username,
      email,
      password: await this.authService.hashPassword(password),
      admin: false,
    });
    return await newUser.save();
  }

  async getUsers() {
    const users = await this.userModel.find().exec();
    return users.map((user) => ({
      id: user.id,
      username: user.username,
      email: user.email,
      booking: user.booking,
      admin: user.admin,
    }));
  }

  async getSingleUser(userId: string) {
    const user = await this.findUser(userId);
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      booking: user.booking,
      admin: user.admin,
    };
  }

  async updateUser(
    userId: string,
    username: string,
    email: string,
    password: string,
    admin: boolean,
  ) {
    const updatedUser = await this.findUser(userId);
    if (username) {
      updatedUser.username = username;
    }
    if (email) {
      updatedUser.email = email;
    }
    if (password) {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(password, salt);

      updatedUser.password = hash;
    }
    if (admin) {
      updatedUser.admin = admin;
    }
    updatedUser.save();
    return updatedUser;
  }

  async deleteUser(userId: string) {
    const result = await this.userModel.deleteOne({ _id: userId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find user.');
    }
    return true;
  }

  private async findUser(id: string): Promise<User> {
    let user;
    try {
      user = await this.userModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }
    if (!user) {
      throw new NotFoundException('Could not find user.');
    }
    return user;
  }

  login(user: User): Observable<string> {
    if (this.validateUser(user.email, user.password).pipe()) {
      return this.authService.generateJWT(user);
    } else {
      throw Error;
    }
  }

  async updateBooking(
    userId: string,
    bookingID: string,
  ) {
    const updatedUser = await this.findUser(userId);
    if (bookingID) {
      updatedUser.booking.push(bookingID);
    }

    updatedUser.save();
    return updatedUser;
  }

  validateUser(email: string, password: string): Observable<any> {
    return this.findByMail(email).pipe(
      switchMap((user: User) =>
        this.authService.comparePasswords(password, user.password).pipe(
          map((match: boolean) => {
            if (match) {
              const { password, ...result } = user;
              return result;
            } else {
              throw Error;
            }
          }),
        ),
      ),
    );
  }

  findByMail(email: string): Observable<User> {
    return from(this.userModel.findOne({ email }));
  }
}
