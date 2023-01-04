import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { moviesModel } from "../models/movies";

@Injectable() export default class MovieService{
    url = "http://localhost:3000/movies";
    constructor(private http: HttpClient){}

    getItems(): Observable<moviesModel[]>{
        return this.http.get<moviesModel[]>(this.url);
    }
}