import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  movies: MovieModel[] = [];
  searchNotFound:string;
  word:string;

  constructor(public _ms: MovieService,
              private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      if(params['name']){
        this.word = params['name'];
        this.search();
      }
    });
  }

  ngOnInit() {
  }

  search() {
    if(this.word.length == 0) {
      return;
    }
    this.movies = [];
    this.searchNotFound = '';

    this._ms.searchMovies(this.word)
        .subscribe(data => {
          for(var d in data.results ){
            var movie = new MovieModel();
            movie = data.results[d];
            this.movies.push(movie);
          }

          if(data.results == 0 ) {
            this.searchNotFound = `There wasn't any results for ${ this.word }`;
          }
      });
  }
}
