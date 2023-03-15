import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movieApp/movies/movies.component';
import { RouterModule, Routes } from '@angular/router';
import { movieDetailsComponent } from './movieApp/movie_details/movieDetais.component';
import { movieFilter } from './movieApp/pipes/movieFilter.pipes';
import { MovieCreateComponent } from './movieApp/movie-create/movie-create.component';
import { CategoryCreateComponent } from './movieApp/category-create/category-create.component';
import { AuthComponent } from './movieApp/auth/auth.component';
import { CategoriesComponent } from './movieApp/categories/categories_component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent }, // çağıracağımız url path i ile çağıracağımız component'i eşleştiriyoruz. 
  { path: '', redirectTo: 'auth', pathMatch: 'full'}, // hiç bir şey seçili olmazsa movies path'i çağrılsın diyoruz.
  { path: 'categories', component: CategoriesComponent },
  { path: 'movies/category/:categoryId', component: MoviesComponent },
  { path: 'movies/create', component: MovieCreateComponent },
  { path: 'movies/:movieId', component: movieDetailsComponent },
  { path: 'categories/create', component: CategoryCreateComponent },
  { path: 'auth', component: AuthComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
