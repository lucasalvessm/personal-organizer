import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { MatDialog } from '@angular/material/dialog';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  dialog = inject(MatDialog);
  router = inject(Router);

  constructor(private movieService: MovieService) {}

  public handleMovieClick(movie: Movie): void {
    this.dialog.open(MovieModalComponent, {
      data: movie,
    });
  }

  public addMovie(): void {
    this.router.navigate(['add-movie']);
  }

  get movies(): Movie[] {
    return this.movieService.getMovies();
  }
}
