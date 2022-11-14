import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MovieService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [AppController, MoviesController],
  providers: [AppService, MovieService],
})
export class AppModule {}
