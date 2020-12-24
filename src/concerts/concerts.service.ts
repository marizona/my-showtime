import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Concert, ConcertDocument } from './schemas/concert.schema';
import { log } from "util";

@Injectable()
export class ConcertsService {
  constructor(
    @InjectModel('Concert')
    private readonly concertModel: Model<ConcertDocument>,
  ) {}
  //  TODO ADD MIDDLEWARE FOR ADMIN

  async getConcerts(): Promise<Concert[]> {
    return this.concertModel.find();
  }
  async getConcert(id: string): Promise<Concert> {
    return this.concertModel.findOne({ _id: id });
  }
  async createConcert(concert: Concert): Promise<Concert> {
    const newConcert = new this.concertModel(concert);
    return newConcert.save();
  }

  async updateConcert(id: string, concert: Concert): Promise<Concert> {
    return this.concertModel.findByIdAndUpdate(id, concert, { new: true });
  }

  async deleteConcert(id: string): Promise<Concert> {
    return this.concertModel.findByIdAndRemove(id);
  }

  async filterConcerts(type: string, query: string): Promise<Concert[]> {
    switch (type) {
      case 'band':
        return this.concertModel.find({ 'band': query });
      case 'location':
        return this.concertModel.find({ 'location': query });
      case 'genre':
        return this.concertModel.find({ 'genre': query });
    }
  }
}
