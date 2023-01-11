import { Component, OnInit } from '@angular/core';
import CategoryService from '../services/categories.service';
import { categoriesModel } from '../models/categoriesModel';
import MovieService from '../services/movie.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss'],
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit{
 //categories: categoriesModel[] = [];
 categories: any;
 constructor(private categoryService: CategoryService, private movieService: MovieService, private router: Router, private alertify: AlertifyService){}
 ngOnInit():void{
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
    })
 }
 createMovie(name:any, description:any, images:any, categoryId:any){
  /* console.log(name.value);
   console.log(description. value)
   console.log(images.value)
   console.log(categoryId.value)*/

  const movie = {id:0, categories:this.categories.value, name:name.value, description:description.value, images:images.value, categoryId:categoryId.value};

  if(name.value === "" || description.value === "" || images.value === "" || categoryId.value === "-1"){
    this.alertify.error("boş bırakılamaz");
    return;
  }
  const extansions = ["jpeg","jpg","png"];
  const extansion = images.value.split('.').pop();

  if(extansions.indexOf(extansion) === -1){
    this.alertify.error("sadece jpg, png, gif kabul edilebilir");
    return;
  }

  this.movieService.createMovie(movie).subscribe(data => 
    //this.router.navigate(['/movies']));
    this.router.navigate(['/movies', data.id]));
 }

}
