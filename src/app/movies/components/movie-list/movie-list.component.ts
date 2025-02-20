import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { MatDialog } from '@angular/material/dialog';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movies: Movie[];
  dialog = inject(MatDialog);

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getMovies();
  }

  handleMovieClick(movie: Movie): void {
    this.dialog.open(MovieModalComponent, {
      data: movie,
    });
  }
}
