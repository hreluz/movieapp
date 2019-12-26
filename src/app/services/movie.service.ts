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
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }`;
    
    return this.http.get( url )
                    .pipe(
                      map( (res:any) => res.json())
                    );

  }
  
  getFeaturedMovies() {     
    let url = `${ this.urlMoviedb}/movie/now_playing?api_key=${ this.apiKey }`;
    
    return this.http.get( url )
                    .pipe(
                      map( (res:any) => res.json())
                    );
  }

  getKidsPopularMovies() {
    let url = `${ this.urlMoviedb}/discover/movie?sort_by=popularity.desc&with_genres=16&api_key=${ this.apiKey }`;
    
    return this.http.get( url )
                    .pipe(
                      map( (res:any) => res.json())
                    );
  }

  getMovie(id){
    let url = `${ this.urlMoviedb}/movie/${id}?api_key=${ this.apiKey }`;
    
    return this.http.get( url )
                    .pipe(
                      map( (res:any) => res.json())
                    );
  }
  searchMovies(text:string) {
    let url = `${ this.urlMoviedb}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${ this.apiKey }`;
    
    return this.http.get( url )
                    .pipe(
                      map( (res:any) => res.json())
                    );

  }
}