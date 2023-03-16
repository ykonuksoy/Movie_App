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
import { AuthGuard } from './guards/auth.guards';
import { MoviesHomeComponent } from './movieApp/movies/movies-home/movies-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full'}, // hiç bir şey seçili olmazsa movies path'i çağrılsın diyoruz.
  {
    path: 'movies',
    component: MoviesHomeComponent,canActivate: [AuthGuard],
    children: [
      { path: '', component: MoviesComponent }, // çağıracağımız url path i ile çağıracağımız component'i eşleştiriyoruz. 
      { path: 'category/:categoryId', component: MoviesComponent  },
      { path: 'create', component: MovieCreateComponent },
      { path: ':movieId', component: movieDetailsComponent}
    ]
  },
  
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]  },
  { path: 'categories/create', component: CategoryCreateComponent, canActivate: [AuthGuard]  },

  { path: 'auth', component: AuthComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
