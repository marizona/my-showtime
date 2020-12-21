import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ConcertsService } from './concerts.service';
import { CreateConcertsDto } from './dto/create-concerts.dto';
import { Concerts } from './interfaces/concerts.interface';

@Controller(`concerts`)
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @Get()
  getConcerts(): Concerts[] {
    return this.concertsService.getConcerts();
  }
  @Get(':id')
  getConcert(@Param('id') id): Concerts {
    return this.concertsService.getConcert(id);
  }
  @Post()
  createConcert(@Body() createConcertDto: CreateConcertsDto): string {
    return `${createConcertDto.band} added for the day ${createConcertDto.date}`;
  }
  @Put(':id')
  updateConcert(@Param('id') id): string {
    return this.concertsService.updateConcert(id);
  }
  @Delete(':id')
  deleteConcert(@Body() updateConcert: CreateConcertsDto, @Param('id') id): string {
    return this.concertsService.deleteConcert(id);
  }
}
