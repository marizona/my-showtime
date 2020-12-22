import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { CreateConcertsDto } from './dto/create-concerts.dto';
// import { Concerts } from './interfaces/concerts.interface';
import { Concert } from './schemas/concert.schema';

@Controller(`concerts`)
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @Get()
  async getConcerts(): Promise<Concert[]> {
    return this.concertsService.getConcerts();
  }
  @Get(':id')
  async getConcert(@Param('id') id): Promise<Concert> {
    return this.concertsService.getConcert(id);
  }
  @Post()
  createConcert(@Body() createConcertDto: CreateConcertsDto): Promise<Concert> {
    return this.concertsService.createConcert(createConcertDto);
  }
  @Delete(':id')
  deleteConcert(@Param('id') id): Promise<Concert> {
    return this.concertsService.deleteConcert(id);
  }
  @Put(':id')
  updateConcert(
    @Body() updateConcertDto: CreateConcertsDto,
    @Param('id') id,
  ): Promise<Concert> {
    return this.concertsService.updateConcert(id, updateConcertDto);
  }
}
