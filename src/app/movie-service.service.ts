import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  movies = [
    {
      "id": "1",
      "title": "Game Night",
      "year": "2018",
      "genres": [
        "Action",
        "Comedy",
        "Crime"
      ],
      "ratings": [
        2,
        10,
        1,
        10,
        6,
        2,
        5,
        2,
        9,
        7,
        5,
        3,
        7,
        7,
        1,
        4,
        5,
        9,
        2,
        8,
        10,
        8,
        1,
        10,
        7,
        10,
        8,
        6,
        7,
        6
      ],
      "poster": "MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
      "contentRating": "11",
      "duration": "PT100M",
      "releaseDate": "2018-02-28",
      "averageRating": 0,
      "originalTitle": "",
      "storyline": "A group of friends who meet regularly for game nights find themselves trying to solve a murder mystery.",
      "actors": [
        "Rachel McAdams",
        "Jesse Plemons",
        "Jason Bateman"
      ],
      "imdbRating": "",
      "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg"
    },
    {
      "id": "5",
      "title": "Beast of Burden",
      "year": "2018",
      "genres": [
        "Action",
        "Crime",
        "Drama"
      ],
      "ratings": [
        9,
        5,
        5,
        5,
        5,
        6,
        10,
        6,
        6,
        9,
        6,
        2,
        2,
        9,
        4,
        6,
        6,
        9,
        7,
        8,
        7,
        10,
        8,
        5,
        3,
        1,
        1,
        5,
        6,
        2
      ],
      "poster": "MV5BMjEyNTM3MDQ2NV5BMl5BanBnXkFtZTgwMDI5Nzk1NDM@._V1_SY500_CR0,0,336,500_AL_.jpg",
      "contentRating": "R",
      "duration": "",
      "releaseDate": "2018-02",
      "averageRating": 0,
      "originalTitle": "",
      "storyline": "Sean Haggerty only has an hour to deliver his illegal cargo. An hour to reassure a drug cartel, a hitman, and the DEA that nothing is wrong. An hour to make sure his wife survives. And he must do it all from the cockpit of his Cessna.",
      "actors": [
        "Daniel Radcliffe",
        "Grace Gummer",
        "Pablo Schreiber"
      ],
      "imdbRating": "",
      "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNTM3MDQ2NV5BMl5BanBnXkFtZTgwMDI5Nzk1NDM@._V1_SY500_CR0,0,336,500_AL_.jpg"
    },
    {
      "id": "9",
      "title": "Death Wish",
      "year": "2018",
      "genres": [
        "Action",
        "Crime",
        "Drama"
      ],
      "ratings": [
        2,
        9,
        5,
        9,
        7,
        7,
        4,
        5,
        5,
        6,
        5,
        3,
        7,
        10,
        4,
        8,
        2,
        9,
        7,
        10,
        2,
        10,
        3,
        1,
        4,
        6,
        4,
        6,
        7,
        3
      ],
      "poster": "MV5BMTkzNjU3MjE0MF5BMl5BanBnXkFtZTgwNTIyNDk0NDM@._V1_SY400_SX270_AL_.jpg",
      "contentRating": "R",
      "duration": "PT108M",
      "releaseDate": "2018-04-13",
      "averageRating": 0,
      "originalTitle": "",
      "storyline": "Dr. Paul Kersey (Bruce Willis) is a surgeon who only sees the aftermath of his city's violence as it's rushed into his ER -until his wife (Elisabeth Shue) and college-age daughter (Camila Morrone) are viciously attacked in their suburban home. With the police overloaded with crimes, Paul, burning for revenge, hunts for his family's assailants to deliver justice. As the anonymous slayings of criminals grabs the media's attention, the city wonders if this deadly avenger is a guardian angel...or a grim reaper. Fury and fate collide in the intense action-thriller Death Wish.                Written by\nMGM",
      "actors": [
        "Bruce Willis",
        "Vincent D'Onofrio",
        "Elisabeth Shue"
      ],
      "imdbRating": "",
      "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjU3MjE0MF5BMl5BanBnXkFtZTgwNTIyNDk0NDM@._V1_SY400_SX270_AL_.jpg"
    },
    {
      "id": "17",
      "title": "The Hurricane Heist",
      "year": "2018",
      "genres": [
        "Action",
        "Thriller"
      ],
      "ratings": [
        9,
        6,
        1,
        5,
        10,
        6,
        9,
        8,
        7,
        2,
        3,
        10,
        4,
        9,
        7,
        7,
        6,
        3,
        7,
        8,
        9,
        1,
        1,
        9,
        2,
        7,
        1,
        4,
        1,
        7
      ],
      "poster": "MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY500_CR0,0,337,500_AL_.jpg",
      "contentRating": "PG-13",
      "duration": "",
      "releaseDate": "2018-03-23",
      "averageRating": 0,
      "originalTitle": "",
      "storyline": "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
      "actors": [
        "Toby Kebbell",
        "Maggie Grace",
        "Ryan Kwanten"
      ],
      "imdbRating": 6.8,
      "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY500_CR0,0,337,500_AL_.jpg"
    },
    {
      "id": "18",
      "title": "Gringo",
      "year": "2018",
      "genres": [
        "Action",
        "Comedy",
        "Drama"
      ],
      "ratings": [
        7,
        6,
        5,
        2,
        10,
        4,
        10,
        1,
        7,
        4,
        6,
        8,
        3,
        4,
        7,
        9,
        3,
        5,
        7,
        6,
        2,
        6,
        8,
        10,
        2,
        4,
        6,
        4,
        9,
        10
      ],
      "poster": "MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
      "contentRating": "R",
      "duration": "PT110M",
      "releaseDate": "2018-03-09",
      "averageRating": 0,
      "originalTitle": "",
      "storyline": "An exhilarating mix of dark comedy, white-knuckle action and dramatic intrigue, Gringo joyrides into Mexico, where mild-mannered businessman Harold Soyinka (David Oyelowo) finds himself at the mercy of his back-stabbing business colleagues back home, local drug lords and a morally conflicted black-ops mercenary. Crossing the line from law-abiding citizen to wanted criminal, Harold battles to survive his increasingly dangerous situation in ways that raise the question: Is he out of his depth - or two steps ahead?                Written by\nAmazon Studios",
      "actors": [
        "David Oyelowo",
        "Charlize Theron",
        "Joel Edgerton"
      ],
      "imdbRating": "",
      "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_SY500_CR0,0,337,500_AL_.jpg"
    },
    {
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
    },
    {
      "id": "30",
      "title": "Pacific Rim Uprising",
      "year": "2018",
      "genres": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "ratings": [
        7,
        3,
        6,
        6,
        7,
        8,
        6,
        10,
        4,
        7,
        10,
        1,
        4,
        4,
        1,
        1,
        1,
        6,
        4,
        9,
        8,
        6,
        5,
        4,
        10,
        6,
        8,
        1,
        3,
        3
      ],
      "poster": "MV5BMjExMjM3MzM4NV5BMl5BanBnXkFtZTgwNjIyMzQ2NDM@._V1_SY500_CR0,0,315,500_AL_.jpg",
      "contentRating": "PG-13",
      "duration": "",
      "releaseDate": "2018-03-23",
      "averageRating": 0,
      "originalTitle": "",
      "storyline": "Jake Pentecost, son of Stacker Pentecost, reunites with Mako Mori to lead a new generation of Jaeger pilots, including rival Lambert and 15-year-old hacker Amara, against a new Kaiju threat.",
      "actors": [
        "Scott Eastwood",
        "Adria Arjona",
        "Tian Jing"
      ],
      "imdbRating": "",
      "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMjM3MzM4NV5BMl5BanBnXkFtZTgwNjIyMzQ2NDM@._V1_SY500_CR0,0,315,500_AL_.jpg"
    },
    {
      "id": "45",
      "title": "Ready Player One",
      "year": "2018",
      "genres": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "ratings": [
        6,
        9,
        6,
        4,
        3,
        4,
        9,
        7,
        2,
        9,
        8,
        1,
        2,
        8,
        5,
        5,
        9,
        10,
        5,
        1,
        4,
        5,
        2,
        10,
        7,
        6,
        4,
        6,
        6,
        2
      ],
      "poster": "MV5BODcxNjI4MzY2MF5BMl5BanBnXkFtZTgwMTE0NzUzNDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
      "contentRating": "PG-13",
      "duration": "",
      "releaseDate": "2018-03-28",
      "averageRating": 0,
      "originalTitle": "",
      "storyline": "Film centers on a young outcast named Wade Watts. In the near future, Watts escapes from his daily drudgery by logging onto an MMO game called 'The Oasis'. When the game's billionaire founder dies, he offers players his fortune as the prize in an easter egg hunt within The Oasis. Watts gets in on the action then after five years finds himself facing off against corporate foes who will go to any lengths to get the money -- in both the real world and in The Oasis.                Written by\nAnonymous",
      "actors": [
        "Letitia Wright",
        "Hannah John-Kamen",
        "Mckenna Grace"
      ],
      "imdbRating": "",
      "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODcxNjI4MzY2MF5BMl5BanBnXkFtZTgwMTE0NzUzNDM@._V1_SY500_CR0,0,337,500_AL_.jpg"
    },
    {
      "id": "63",
      "title": "A Prayer Before Dawn",
      "year": "2017",
      "genres": [
        "Action",
        "Biography",
        "Crime"
      ],
      "ratings": [
        7,
        7,
        4,
        3,
        9,
        2,
        7,
        10,
        9,
        3,
        6,
        10,
        2,
        7,
        5,
        10,
        4,
        2,
        7,
        9,
        3,
        1,
        4,
        1,
        5,
        1,
        1,
        3,
        10,
        9
      ],
      "poster": "MV5BMTExMTU5NTkxNzZeQTJeQWpwZ15BbWU4MDM5NDg2MDQy._V1_SY500_CR0,0,337,500_AL_.jpg",
      "contentRating": "R",
      "duration": "PT116M",
      "releaseDate": "2018-04-13",
      "averageRating": 0,
      "originalTitle": "",
      "storyline": "The true story of an English boxer incarcerated in one of Thailand's most notorious prisons as he fights in Muay Thai tournaments to earn his freedom.",
      "actors": [
        "Joe Cole",
        "Vithaya Pansringarm",
        "Panya Yimmumphai"
      ],
      "imdbRating": 7.1,
      "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMTU5NTkxNzZeQTJeQWpwZ15BbWU4MDM5NDg2MDQy._V1_SY500_CR0,0,337,500_AL_.jpg"
    }
  ];
  constructor(httpClient: HttpClient) { }
  getTopMovies(){
    return of(this.movies);
  }
  searchMovies(){
    return of(this.movies);
  }
}
