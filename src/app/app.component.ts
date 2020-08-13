import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading: boolean;
  ngOnInit(): void {

  }
  title = 'angular-demo-full';
  movies = [];
  constructor(private movieService: MovieService) {
    this.isLoading = true;
    this.movieService
      .getTopMovies()
      .subscribe(movies => {
        this.movies = movies;
        this.isLoading = false;
      });
  }
  searchMovies(event: any) {
    var searchStr = event.target.value
    if (!searchStr) {
      searchStr = "all";
    }
    this.isLoading = true;
    this.movieService.searchMovies(searchStr).subscribe((res) => {
      this.movies = res;
      this.isLoading = false;

    })
  }



}
