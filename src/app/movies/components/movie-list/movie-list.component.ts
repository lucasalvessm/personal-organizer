import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { MatDialog } from '@angular/material/dialog';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit {
  dialog = inject(MatDialog);
  router = inject(Router);
  movieService = inject(MovieService);
  private snackBar = inject(MatSnackBar);

  loading: boolean = false;
  movies: Movie[] = [];

  ngOnInit(): void {
    this.loading = true;
    this.movieService
      .getMovies()
      .pipe(delay(1000))
      .subscribe({
        next: (movies) => (this.movies = movies),
        error: (err) => {
          this.loading = false;
          this.snackBar.open(
            'Ocorreu um erro inesperado, por favor tente mais tarde!',
            'close',
            {
              duration: 5000,
            }
          );
          console.error(err);
        },
        complete: () => (this.loading = false),
      });
  }

  public handleMovieClick(movie: Movie): void {
    this.dialog.open(MovieModalComponent, {
      data: movie,
    });
  }

  public addMovie(): void {
    this.router.navigate(['add-movie']);
  }
}
