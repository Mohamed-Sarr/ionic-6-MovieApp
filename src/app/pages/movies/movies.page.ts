import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies = [];
  currentPage = [];
  constructor(private movieService:MovieService,private loadingCtrl :LoadingController) { }

  ngOnInit() {
    this.movieService.getTopRadedMovies().subscribe(res=>{
      console.log(res)
    })
  }

}
