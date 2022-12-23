export class moviesModel{
    categories: string;
    name: string;
    description: string;
    images: string;


    constructor(categories: string, name: string, description: string, images: string){
        this.categories = categories;
        this.name = name;
        this.description = description;
        this.images = images;
    }
}