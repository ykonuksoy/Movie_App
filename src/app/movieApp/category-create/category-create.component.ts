import { Component } from '@angular/core';
import CategoryService from '../services/categories.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss'],
  providers: [CategoryService]

})

export class CategoryCreateComponent {
  categories: any;
  model:any = {};

  
  constructor(private categoryService: CategoryService, private router: Router){

  }
  ngOnInit():void{
     this.categoryService.getCategories().subscribe(data=>{
       this.categories = data;
     })
  }
  createCategory(){
    console.log(this.model);
    
    const category = {id:0, categories: this.model.categories  };
    console.log(category.categories);

    this.categoryService.createMovie(category).subscribe(data =>
    this.router.navigate(['/movies']));
    console.log(this.categories);
      
    
  }
 
 }
