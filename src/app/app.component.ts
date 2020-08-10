import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from './movie-service.service';


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
  constructor(private movieService: MovieServiceService) {
    this.movieService
      .getTopMovies()
      .subscribe(movies => this.movies = movies);
  }
  searchMovies(event: any) {
    var searchStr = event.target.value
    if (!searchStr) {
      searchStr = "all";
    }
    this.isLoading = true;
    this.movieService.searchMovies(searchStr).subscribe((res) => {
      this.movies = res as any[];
      this.isLoading = false;

    })
  }



}
