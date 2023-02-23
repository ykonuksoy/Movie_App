import { Component, OnInit } from '@angular/core';
import CategoryService from '../services/categories.service';
import { categoriesModel } from '../models/categoriesModel';
import MovieService from '../services/movie.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss'],
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit{
 //categories: categoriesModel[] = [];
 categories: any;
 model:any = {
   categoryId: "-1"
 };

 constructor(private categoryService: CategoryService, private movieService: MovieService, private router: Router, private alertify: AlertifyService){}
 ngOnInit():void{
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
    })
 }
 
 createMovie(form: NgForm){
  console.log(this.model);
  console.log(form);

   const extansions = ["jpeg","jpg","png"];
  let extansion = this.model.images.split('.').pop();

  const movie = {id:0, categories:this.model.categories, name:this.model.name, description:this.model.description, images:this.model.images, categoryId:this.model.categoryId};

  if(extansions.indexOf(extansion) === -1){
    this.alertify.error("sadece jpg, png, gif kabul edilebilir");
    return;
  }

  else{
    this.movieService.createMovie(movie).subscribe(data => 
      //this.router.navigate(['/movies']));
      this.router.navigate(['/movies'])); 
  
      console.log(movie)
  
   }
  }



}
