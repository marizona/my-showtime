import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConcertsController } from './concerts/concerts.controller';
// import { ConcertsService } from './concerts/concerts.service';
import { ConcertsModule } from './concerts/concerts.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [ConcertsModule, MongooseModule.forRoot(config.mongo)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
