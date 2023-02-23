import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { moviesModel } from "../models/movies";

@Injectable() export default class MovieService{
    url = "http://localhost:3000/movies";
    url_firebase = "https://angular-movies-app-default-rtdb.firebaseio.com/";
    constructor(private http: HttpClient){}

    getItems(categoryId: number): Observable<moviesModel[]>{
  

        return this.http.get<moviesModel[]>(this.url_firebase + "movies.json")
        .pipe(
           map(response => {
              const movies: moviesModel[] = [];
              
              for (const key in response){
                  if(categoryId){
                      if(categoryId === response[key].categoryId){
                        movies.push({...response[key], id:key});
                      }
                  }
                  else{
                    movies.push({...response[key], id:key});
                  }
                  
              }
              return movies;
           }),
            catchError(this.handleError)
        );
    }
    createMovie(movie: moviesModel):Observable<moviesModel>{
        return this.http.post<moviesModel>(this.url_firebase + '/movies.json', movie);

    }

    getMovieId(movieId: string): Observable<moviesModel> {
        return this.http.get<moviesModel>(this.url_firebase + "movies/" + movieId + ".json");
      }

    private handleError(error: HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            //client yada network
        }
        return throwError ("bir hata oluştu");
    }
}