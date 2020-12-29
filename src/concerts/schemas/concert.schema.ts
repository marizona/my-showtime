import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConcertDocument = Concert & Document;

@Schema()
export class Concert {

  @Prop()
  band: string;

  @Prop()
  date: string;

  @Prop()
  hour: string;

  @Prop()
  location: string;

  @Prop()
  genre: string;

  @Prop()
  price: string;
}

export const ConcertSchema = SchemaFactory.createForClass(Concert);
