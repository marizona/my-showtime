import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';
import { UsersService } from '../users/users.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('Booking')
    private readonly bookingModel: Model<BookingDocument>,
    private authService: AuthService,
  ) {}
  //TODO ADD MIDDLEWARE FOR ADMIN

  async getBookings(): Promise<Booking[]> {
    return this.bookingModel.find();
  }
  async getBooking(id: string): Promise<Booking> {
    return this.bookingModel.findOne({ _id: id });
  }
  async book(concertID: string): Promise<Booking> {
    const newBooking = new this.bookingModel({
      concertID: concertID,
      date: Date.now(),
    });

    const userService = new UsersService(null, this.authService)

    let booking = await newBooking.save()

    userService.updateBooking("5fe1e57426edf930b0fbb8ac", booking._id)

    return booking
  }
}
