import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service-store';
import { Movie } from '../../models/movie.model';
import { MatDialog } from '@angular/material/dialog';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import {
  getMoviesLoadingSelect,
  moviesSelect,
} from '../../store/movie.selectors';
import { getMovies } from '../../store/movie.actions';
import { Observable } from 'rxjs';

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
  private store = inject(Store);

  public loading$: Observable<boolean> | undefined;
  movies: Movie[] = [];

  ngOnInit(): void {
    this.store.dispatch(getMovies());

    this.store.select(moviesSelect).subscribe((movies) => {
      this.movies = movies;
    });

    this.loading$ = this.store.select(getMoviesLoadingSelect);

    // this.loading = true;
    // this.movieService.getMovies().subscribe({
    //   next: (movies) => {
    //     // this.loading = false;
    //     this.movies = movies;
    //   },
    //   error: (err) => {
    //     // this.loading = false;
    //     this.snackBar.open(
    //       'Ocorreu um erro inesperado, por favor tente mais tarde!',
    //       'close',
    //       {
    //         duration: 5000,
    //       }
    //     );
    //     console.error(err);
    //   },
    // });
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
