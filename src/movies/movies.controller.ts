import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './movies.entity';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return '모든 영화를 반환 합니다.';
  }

  @Get('/search')
  search(@Query('year') searchingYear: string) {
    return `${searchingYear} 이후의 영화 검색`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `하나의 영화를 리턴한다. : ${movieId}`;
  }

  @Post()
  createOne(@Body() movieData: Movie) {
    console.log(movieData);
    return '영화가 생성 되었습니다.';
  }

  @Delete('/:id')
  deleteOne(@Param('id') movieId: string) {
    return `하나의 영화를 삭제합니다. : ${movieId}`;
  }

  @Patch('/:id')
  updateOne(@Param('id') movieId: string, @Body() updateData: Movie) {
    console.log(updateData);
    return `하나의 영화를 업데이트 합니다. :${movieId}`;
  }
}
