import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from 'src/app/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {

  @Input('movies') movies: MovieModel[] = [];
  @Input('title') title:string;

  constructor() { }

  ngOnInit() {
  }

}
