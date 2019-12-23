import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieApp';

  constructor(private _ms:MovieService){
    this._ms.getPopulars()
            .subscribe(data => console.log(data));
  }
}
