import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo-full';
  movie = {
    "id": "22",
    "title": "Tomb Raider",
    "year": "2018",
    "genres": [
    "Action",
    "Adventure"
    ],
    "ratings": [
    5,
    3,
    6,
    10,
    3,
    2,
    5,
    7,
    1,
    8,
    8,
    10,
    4,
    1,
    2,
    4,
    5,
    2,
    9,
    8,
    6,
    7,
    8,
    8,
    1,
    8,
    3,
    3,
    3,
    3
    ],
    "poster": "MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SY500_CR0,0,337,500_AL_.jpg",
    "contentRating": "PG-13",
    "duration": "",
    "releaseDate": "2018-03-16",
    "averageRating": 0,
    "originalTitle": "",
    "storyline": "Lara Croft is the fiercely independent daughter of an eccentric adventurer who vanished when she was scarcely a teen. Now a young woman of 21 without any real focus or purpose, Lara navigates the chaotic streets of trendy East London as a bike courier, barely making the rent, and takes college courses, rarely making it to class. Determined to forge her own path, she refuses to take the reins of her father's global empire just as staunchly as she rejects the idea that he's truly gone. Advised to face the facts and move forward after seven years without him, even Lara can't understand what drives her to finally solve the puzzle of his mysterious death. Going explicitly against his final wishes, she leaves everything she knows behind in search of her dad's last-known destination: a fabled tomb on a mythical island that might be somewhere off the coast of Japan. But her mission will not be an easy one; just reaching the island will be extremely treacherous. Suddenly, the stakes couldn't ...                Written by\nWarner Bros. Pictures",
    "actors": [
    "Alicia Vikander",
    "Hannah John-Kamen",
    "Walton Goggins"
    ],
    "imdbRating": "",
    "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SY500_CR0,0,337,500_AL_.jpg"
    };
}
