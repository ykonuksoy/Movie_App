import { Component } from '@angular/core';
import { CategoriesList } from '../models/categoriesList';
import { categoriesModel } from '../models/categoriesModel';
import CategoryService from '../services/categories.service';
import { HttpParameterCodec } from "@angular/common/http";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoryService]

})
export class CategoriesComponent {

  items: categoriesModel[] = [] // kategori listesindeki itemleri çekmek istediğimiz için bu dizi listesini array olarak tanıtmalıyız.
  selected :any;

  constructor(
    private CategoryService: CategoryService){}

  ngOnInit(): void{
    this.CategoryService.getCategories().subscribe(data => {
      this.items = data
    })
  }

  clickEvent(item: categoriesModel){ // göndereceği değerin tipi categori olduğu için modülü çağırmalıyız.
      this.selected = item; 
  }
  isActive(item: categoriesModel) { // göndereceği değerin tipi categori olduğu için modülü çağırmalıyız.
    return this.selected === item;
  };
}


