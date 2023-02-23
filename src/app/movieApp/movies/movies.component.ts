import { Component, OnInit } from '@angular/core';
import { moviesModel } from '../models/movies';
import { moviesList } from '../models/moviesList';
import { AlertifyService } from '../services/alertify.service';
import MovieService from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MovieService]
})

export class MoviesComponent implements OnInit {
  constructor(
    private alertify: AlertifyService, 
    private MovieService: MovieService,
    private activatedRoute: ActivatedRoute){}

  ngOnInit():void{
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      //console.log(params["categoryId"]);
      this.MovieService.getItems(params["categoryId"]).subscribe(data => { // async bir sorgudan bize gelecek olan yanıtın ne zaman geleceğini bilemeyiz. o yüzden burada bekletmemiz gerekebilir
        this.loading = false;
        this._getMovies = data;
      }, error =>
       this.error = error); 
    });
  }

  items: moviesList[] = []
  model = new moviesList();
  today = new Date();
  filtreText: string = "";
  result: moviesList[] = []
  error: any;
  loading: boolean = false;

  private _getMovies = this.getItems();
  
  public get filterMovies() {
    return this._getMovies;
  }
  public set filterMovies(value) {
    this._getMovies = value;
  }



  getItems(){
    return this.model.items;
    
  }
  onInputChange(){
    //this.filtreText = this.filtreText.toLocaleLowerCase();
    return this._getMovies.filter(s => s.name.indexOf(this.filtreText)!== -1)
  }
  addToList($event: any, _getMovies: moviesModel){
    //console.log(_getMovies.name)
    //console.log($event.target.classList)
    if($event.target.classList.contains('btn-outline-secondary')){
        $event.target.classList.remove('btn-outline-secondary');
        $event.target.classList.add('btn-danger');
        $event.target.innerText = "Listeden Çıkar";
        this.alertify.success(_getMovies.name + " Listeye Eklendi")
    }
    else{
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-outline-secondary');
      $event.target.innerText = "Listeye Ekle";
      this.alertify.error(_getMovies.name + " Listeden Çıkartıldı")
      
    }
  }


  
}
