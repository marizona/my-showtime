import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking {
  @Prop()
  concertID: string;

  @Prop()
  date: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
