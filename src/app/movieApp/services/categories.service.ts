import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, pipe } from "rxjs";
import { categoriesModel } from "../models/categoriesModel";

@Injectable() export default class CategoryService{
    //url = "http://localhost:3000/categories";
    url_firebase = "https://angular-movies-app-default-rtdb.firebaseio.com/";
    constructor(private http: HttpClient){}

    getCategories(): Observable<categoriesModel[]>{
        return this.http.get<categoriesModel[]>(this.url_firebase + "/categories.json")
        .pipe(
            map(response => {
               const categories: categoriesModel[] = [];
               
               for (const key in response){
                categories.push({...response[key], id:key});
                   
               }
               return categories;
            }),
         );
        
    }   
    createMovie(category: categoriesModel):Observable<categoriesModel>{
        return this.http.post<categoriesModel>(this.url_firebase + '/categories.json', category);

    } 

}