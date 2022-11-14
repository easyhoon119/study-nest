import { Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';

@Injectable()
export class MovieService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }

  deleteOne(id: string): boolean {
    this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  create(movieData: Movie) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
