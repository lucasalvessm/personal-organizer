import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie';

export const getMovies = createAction('[movie] get movies');

export const storeMovies = createAction(
  '[movie] store movies',
  props<{
    movies: Movie[];
  }>()
);

export const createMovie = createAction(
  '[movie] create movie',
  props<{
    movie: Movie;
  }>()
);

export const storeMovie = createAction(
  '[movie] store movie',
  props<{
    movie: Movie;
  }>()
);

export const deleteMovie = createAction(
  '[movie] delete movie',
  props<{
    movie: Movie;
  }>()
);
