import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MovieModel } from 'src/app/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  featuredMovies: MovieModel[] = [];

  constructor(public _ms:MovieService) {
    this._ms.getFeaturedMovies()
        .subscribe(data => {
          for(var d in data.results ){
            var movie = new MovieModel();
            movie = data.results[d];
            this.featuredMovies.push(movie);
          }
    });
  }

  ngOnInit() {
  }
}
