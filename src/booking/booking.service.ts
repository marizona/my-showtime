import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('Booking')
    private readonly bookingModel: Model<BookingDocument>,
    private readonly usersService: UsersService
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

    let booking = await newBooking.save()

    //TODO get the user ID from the midleware, (midleware can get the user ID from the token).
    this.usersService.updateBooking("5fe1e57426edf930b0fbb8ac", booking._id)

    return booking
  }
}
