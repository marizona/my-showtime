import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query, UseGuards
} from "@nestjs/common";
import { ConcertsService } from './concerts.service';
import { CreateConcertsDto } from './dto/create-concerts.dto';
import { Concert } from './schemas/concert.schema';
import { isAdmin } from "../auth/decorator/roles.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { AdminGuard } from "../auth/guards/admin.guard";

@Controller(`concerts`)
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @Get()
  async getConcerts(): Promise<Concert[]> {
    return this.concertsService.getConcerts();
  }

  
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('filter/:type/:query')
  async filterConcert(
    @Param('type') type: string,
    @Param('query') query: string,
  ) {
    return this.concertsService.filterConcerts(type, query);
  }

  @Get(':id')
  async getConcert(@Param('id') id): Promise<Concert> {
    return this.concertsService.getConcert(id);
  }
  
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post()
  createConcert(@Body() createConcertDto: CreateConcertsDto): Promise<Concert> {
    return this.concertsService.createConcert(createConcertDto);
  }
  
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Delete(':id')
  deleteConcert(@Param('id') id): Promise<Concert> {
    return this.concertsService.deleteConcert(id);
  }
  
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Put(':id')
  updateConcert(
    @Body() updateConcertDto: CreateConcertsDto,
    @Param('id') id,
  ): Promise<Concert> {
    return this.concertsService.updateConcert(id, updateConcertDto);
  }
}
