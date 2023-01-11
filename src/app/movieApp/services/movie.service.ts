import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { moviesModel } from "../models/movies";

@Injectable() export default class MovieService{
    url = "http://localhost:3000/movies";
    constructor(private http: HttpClient){}

    getItems(categoryId: number): Observable<moviesModel[]>{
        let newUrl = this.url;
        if(categoryId){
            newUrl += '?categoryId=' + categoryId;
        }
        return this.http.get<moviesModel[]>(newUrl)
        .pipe(
           // tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }
    createMovie(movie: moviesModel):Observable<moviesModel>{
        return this.http.post<moviesModel>(this.url, movie);

    }

    getMovieId(movieId: number): Observable<moviesModel> {
        return this.http.get<moviesModel>(this.url + "/" + movieId);
      }

    private handleError(error: HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            //client yada network
        }
        return throwError ("bir hata oluştu");
    }
}