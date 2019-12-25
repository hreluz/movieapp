import { Pipe, PipeTransform } from '@angular/core';
import { MovieModel } from '../models/movie';

@Pipe({
  name: 'movieImage'
})
export class MovieImagePipe implements PipeTransform {

  transform(movie: MovieModel): any {
    let url = 'https://image.tmdb.org/t/p/w500';

    console.log(movie);

    if( movie.backdrop_path || movie.poster_path) {
      return movie.poster_path ?  url + movie.poster_path : url + movie.backdrop_path;
    }

    return "assets/img/noimage.jpg";
  }

}
