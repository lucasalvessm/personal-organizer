import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  getMovies,
  storeMovies,
  createMovie,
  storeMovie,
  deleteMovie,
} from './movie.actions';
import { map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { moviesSelect } from './movie.selectors';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Injectable()
export class MovieEffects {
  store = inject(Store);
  router = inject(Router);
  actions$ = inject(Actions);
  movieService = inject(MovieService);

  getMovies = createEffect(() => {
    return this.actions$.pipe(
      ofType(getMovies),
      withLatestFrom(this.store.select(moviesSelect)),
      switchMap(([, movies]) => {
        if (movies && movies.length) {
          return of(storeMovies({ movies }));
        } else {
          return this.movieService
            .getMovies()
            .pipe(map((movies) => storeMovies({ movies })));
        }
      })
    );
  });

  createMovie = createEffect(() => {
    return this.actions$.pipe(
      ofType(createMovie),
      switchMap((action) => {
        return this.movieService
          .save(action.movie)
          .pipe(map((movie) => storeMovie({ movie })));
      })
    );
  });

  deleteMovie = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteMovie),
      withLatestFrom(this.store.select(moviesSelect)),
      switchMap(([action, movies]) => {
        return this.movieService.delete(action.movie).pipe(
          map(() => {
            const newMovies = movies.filter(
              (movie) => movie._id !== action.movie._id
            );
            return storeMovies({ movies: newMovies });
          })
        );
      })
    );
  });

  storeMovie = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(storeMovie),
        tap(() => {
          this.router.navigate(['']);
        })
      );
    },
    {
      dispatch: false,
    }
  );
}
