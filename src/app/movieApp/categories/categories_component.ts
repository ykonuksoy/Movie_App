import { Component } from '@angular/core';
import { CategoriesList } from '../models/categoriesList';
import { categoriesModel } from '../models/categoriesModel';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  items: CategoriesList[] = [] // kategori listesindeki itemleri çekmek istediğimiz için bu dizi listesini array olarak tanıtmalıyız.
  selected :any;
  
  model = new CategoriesList(); // categori listesini kullanacağı için categori modülünü kullanan listeyi çağırmalıyız. buradan içerisindeki itemslara ulaşacağız.

  getItems(){
    return this.model.items;
  }
  clickEvent(item: categoriesModel){ // göndereceği değerin tipi categori olduğu için modülü çağırmalıyız.
      this.selected = item; 
  }
  isActive(item: categoriesModel) { // göndereceği değerin tipi categori olduğu için modülü çağırmalıyız.
    return this.selected === item;
  };
}


