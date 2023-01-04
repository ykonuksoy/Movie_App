import { Component } from '@angular/core';
import { CategoriesList } from '../models/categoriesList';
import { categoriesModel } from '../models/categoriesModel';
import CategoryService from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoryService]

})
export class CategoriesComponent {

  constructor(
    private CategoryService: CategoryService){}

  ngOnInit(): void{
    this.CategoryService.getCategories().subscribe(data => {
      this.model.items = data
    })
  }

  items: CategoriesList[] = [] // kategori listesindeki itemleri çekmek istediğimiz için bu dizi listesini array olarak tanıtmalıyız.
  selected :any;
  
  model = new CategoriesList(); // categori listesini kullanacağı için categori modülünü kullanan listeyi çağırmalıyız. buradan içerisindeki itemslara ulaşacağız.

  getCategories(){
    return this.model.items;
  }
  clickEvent(item: categoriesModel){ // göndereceği değerin tipi categori olduğu için modülü çağırmalıyız.
      this.selected = item; 
  }
  isActive(item: categoriesModel) { // göndereceği değerin tipi categori olduğu için modülü çağırmalıyız.
    return this.selected === item;
  };
}


