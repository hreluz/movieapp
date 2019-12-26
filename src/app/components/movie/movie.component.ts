import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movie =  new MovieModel();
  
  constructor(private route:ActivatedRoute,
              private router:Router,
              private _ms:MovieService) { 

    const id = this.route.snapshot.paramMap.get('id');
    if(!(new RegExp('^([0-9]+)$')).test(id)) {
      this.router.navigateByUrl('/home');
    }

    this._ms.getMovie(id)
        .subscribe(
          result => {
            console.log(result);
            this.movie = result;
          },
          error => {
            console.log(error);
            this.router.navigateByUrl('/home');
        }
    );
  }

  ngOnInit() {
  }

}
