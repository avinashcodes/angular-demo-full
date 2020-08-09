import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from './movie-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  title = 'angular-demo-full';
  movies = [];
  isSearchCompleted = false;
  constructor(private movieService: MovieServiceService) {
    this.movieService
      .getTopMovies()
      .subscribe(movies => this.movies = movies);
  }
  searchMovies(searchStr) {
    if (searchStr === '') {
      return;
    }
    this.movieService.searchMovies(searchStr).subscribe((res) => {

      this.isSearchCompleted = true;
      this.movies = res as any[];

    })
  }



}
