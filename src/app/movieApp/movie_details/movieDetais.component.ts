import { Component, OnInit } from "@angular/core";
import MovieService from "../services/movie.service";
import { ActivatedRoute } from "@angular/router";
import { moviesModel } from "../models/movies";
import { moviesList } from "../models/moviesList";

@Component({
    selector: 'movie-details',
    templateUrl: './movieDetails.component.html',
    styleUrls: ['./movieDetails.component.scss'],
    providers: [MovieService]
  })
  
  export class movieDetailsComponent{

    movie: any
   
    constructor(
        private MovieService: MovieService,
        private activatedRoute: ActivatedRoute){}

      ngOnInit():void{
        this.activatedRoute.params.subscribe(params => {
            this.MovieService.getMovieId(params["movieId"]).subscribe(data => { // async bir sorgudan bize gelecek olan yanıtın ne zaman geleceğini bilemeyiz. o yüzden burada bekletmemiz gerekebilir
              this.movie = data;
             // console.log(params["movieId"]);
            }); 
          });
          
      }
  
  }
  