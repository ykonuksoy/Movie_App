import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { TodoComponent } from './todo/todo_component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './movieApp/navbar/navbar.component';
import { CategoriesComponent } from './movieApp/categories/categories_component';
import { MoviesComponent } from './movieApp/movies/movies.component';
import { SummaryPipe } from './movieApp/pipes/summary.pipes';
import { movieFilter } from './movieApp/pipes/movieFilter.pipes';
import { AlertifyService } from './movieApp/services/alertify.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
  //  TodoComponent,
    NavbarComponent,
    CategoriesComponent,
    MoviesComponent,
    SummaryPipe,
    movieFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AlertifyService
  ],
  bootstrap: [
    AppComponent,
  //  TodoComponent,
    NavbarComponent,
    CategoriesComponent,
    MoviesComponent
  ]
})
export class AppModule { }


