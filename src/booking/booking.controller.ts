import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Headers,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './schemas/booking.schema';

@Controller(`booking`)
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  async getBookings(): Promise<Booking[]> {
    return this.bookingService.getBookings();
  }

  @Get(':id')
  async getBooking(@Param('id') id): Promise<Booking> {
    return this.bookingService.getBooking(id);
  }

  @Post(':concertID')
  book(@Param('concertID') id, @Headers() headers): Promise<Booking> {
    return this.bookingService.book(id, headers);
  }
}
  