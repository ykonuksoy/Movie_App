import { categoriesModel } from "../models/categoriesModel";

export class CategoriesList{
    items: categoriesModel[]

    constructor(){
        this.items =  [
            {categories: "Korku Filmi"},
            {categories: "Gerilim"},
            {categories: "Macera"},
            {categories: "Romantik"},
        ]
    }
}