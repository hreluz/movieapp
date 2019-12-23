import { Injectable } from '@angular/core';
import { environment } from '../../environments/.env';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey:string = environment.MOVIE_DB_KEY;
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor(private http:Http) {  
   }

  getPopulars() {
    console.log(this.apiKey);
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }`;
    
    return this.http.get( url )
                    .pipe(
                      map( (res:any) => res.json())
                    );

  }
}