import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConcertsController } from './concerts/concerts.controller';
import { ConcertsService } from './concerts/concerts.service';

@Module({
  imports: [],
  controllers: [AppController, ConcertsController],
  providers: [AppService, ConcertsService],
})
export class AppModule {}
