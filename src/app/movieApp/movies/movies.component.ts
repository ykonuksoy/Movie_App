import { Component } from '@angular/core';
import { moviesModel } from './movies';
import { moviesList } from './moviesList';
import { CategoriesComponent } from '../categories/categories_component';
import { categoriesModel } from '../categories/categoriesModel';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  items: moviesList[] = []

  model = new moviesList();


  getItems(){
    return this.model.items.filter(item => item.categories === item.categories);
  }

  
}
