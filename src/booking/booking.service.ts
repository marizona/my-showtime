import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('Booking')
    private readonly bookingModel: Model<BookingDocument>,
    private readonly usersService: UsersService,
  ) {}
  //TODO ADD MIDDLEWARE FOR ADMIN

  async getBookings(): Promise<Booking[]> {
    return this.bookingModel.find();
  }
  async getBooking(id: string): Promise<Booking> {
    return this.bookingModel.findOne({ _id: id });
  }
  async book(concertID: string, headers): Promise<Booking> {
    const newBooking = new this.bookingModel({
      concertID: concertID,
      date: Date.now(),
    });

    const booking = await newBooking.save();

    const tokenToParse = headers.authorization;
    const token = tokenToParse.substring(7);
    const result = jwt_decode(token);
    const email = result['user']['email'];
    const user = await this.usersService.findByMail(email);
    await this.usersService.updateBooking(user.id, booking._id);
    return booking;
  }
}
