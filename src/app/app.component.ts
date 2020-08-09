import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from './movie-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
  title = 'angular-demo-full';
  movies = [];
  constructor(movieService: MovieServiceService){
    movieService
      .getTopMovies()
      .subscribe(movies => {this.movies = movies});
  }
  
}
