import { Component } from '@angular/core';
import { CategoriesList } from './categoriesList';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  items: CategoriesList[] = []

  model = new CategoriesList();
  getItems(){
    return this.model.items;
    
  }
  clickEvent(i: any){
    const checkCategory = this.getItems()[i].categories;
    console.log(checkCategory);
  }
}


