import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { TodoComponent } from './todo/todo_component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './movieApp/navbar/navbar.component';
import { CategoriesComponent } from './movieApp/categories/categories_component';
import { MoviesComponent } from './movieApp/movies/movies.component';


@NgModule({
  declarations: [
    AppComponent,
  //  TodoComponent,
    NavbarComponent,
    CategoriesComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  //  TodoComponent,
    NavbarComponent,
    CategoriesComponent,
    MoviesComponent
  ]
})
export class AppModule { }


