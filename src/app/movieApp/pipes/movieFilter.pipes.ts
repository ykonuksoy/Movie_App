import { Pipe, PipeTransform } from "@angular/core";
import { moviesList } from "../models/moviesList";
import { moviesModel } from "../models/movies";

@Pipe({
    name: "movieFilter"
})
export class movieFilter implements PipeTransform{

      items: moviesModel[] = [];

    transform(items : moviesModel[], filtreText: string): moviesModel[]{
        filtreText = filtreText.toLocaleLowerCase();
        //console.log(filtreText);
        //console.log(items);
        return filtreText? items.filter((m: moviesModel) => m.name.toLocaleLowerCase().indexOf(filtreText) !== -1): items
    }
    
 
}