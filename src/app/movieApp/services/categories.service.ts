import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { categoriesModel } from "../models/categoriesModel";

@Injectable() export default class CategoryService{
    url = "http://localhost:3000/categories";
    constructor(private http: HttpClient){}

    getCategories(): Observable<categoriesModel[]>{
        return this.http.get<categoriesModel[]>(this.url);
    }    
}