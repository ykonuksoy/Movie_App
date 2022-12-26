import { Component } from '@angular/core';
import { moviesModel } from '../models/movies';
import { moviesList } from '../models/moviesList';
import { CategoriesComponent } from '../categories/categories_component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  items: moviesList[] = []
  model = new moviesList();
  today = new Date();
  filtreText: string = "";
  result: moviesList[] = []

  private _getMovies = this.getItems();
  
  public get filterMovies() {
    return this._getMovies;
  }
  public set filterMovies(value) {
    this._getMovies = value;
  }


  getItems(){
    return this.model.items;
  }
  onInputChange(){
    //this.filtreText = this.filtreText.toLocaleLowerCase();
    return this._getMovies.filter(s => s.name.indexOf(this.filtreText)!== -1)
  }


  
}
