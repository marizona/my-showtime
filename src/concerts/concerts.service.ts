import { Injectable } from '@nestjs/common';
import { Concerts } from './interfaces/concerts.interface';

@Injectable()
export class ConcertsService {
  private readonly concerts: Concerts[] = [
    {
      id: '1',
      band: 'Swans',
      location: 'Kawati',
      date: '20/12/2020',
      genre: 'Experimental Rock',
    },
    {
      id: '2',
      band: 'Wolves in the Throne Room',
      location: 'Grillen',
      date: '20/12/2021',
      genre: 'Cascadian Black Metal',
    },
  ];
  getConcerts(): Concerts[] {
    return this.concerts;
  }
  getConcert(id: string): Concerts {
    return this.concerts.find((concert) => concert.id === id);
  }
  createConcert() {
    return 'Concert créé';
  }

  updateConcert(id) {
    return `Concert n°${id} modifié`;
  }

  deleteConcert(id) {
    return `Concert n° ${id} supprimé`;
  }
}
