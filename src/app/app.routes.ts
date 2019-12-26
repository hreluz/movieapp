import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'movie/:id', component: MovieComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:name', component: SearchComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}