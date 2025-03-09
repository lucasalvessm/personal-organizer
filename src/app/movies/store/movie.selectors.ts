import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './movie.reducer';

export const movieStoreSelect = createFeatureSelector<MovieState>('movie');

export const moviesSelect = createSelector(
  movieStoreSelect,
  (state) => state.movies
);

export const getMoviesLoadingSelect = createSelector(
  movieStoreSelect,
  (state) => state.getMoviesLoading
);

export const saveMovieLoadingSelect = createSelector(
  movieStoreSelect,
  (state) => state.saveMovieLoading
);
