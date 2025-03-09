import { createReducer, on } from '@ngrx/store';
import { Movie } from '../models/movie';
import {
  createMovie,
  getMovies,
  storeMovie,
  storeMovies,
} from './movie.actions';

export interface MovieState {
  movies: Movie[];
  getMoviesLoading: boolean;
  saveMovieLoading: boolean;
  error?: string;
}

const initialState: MovieState = {
  movies: [],
  getMoviesLoading: false,
  saveMovieLoading: false,
};

export const movieReducer = createReducer(
  initialState,
  on(getMovies, (state) => {
    return {
      ...state,
      getMoviesLoading: true,
    };
  }),
  on(storeMovies, (state, action) => {
    return {
      ...state,
      movies: action.movies,
      getMoviesLoading: false,
    };
  }),
  on(createMovie, (state) => {
    return {
      ...state,
      saveMovieLoading: true,
    };
  }),
  on(storeMovie, (state, action) => {
    const movies = state.movies;
    return {
      ...state,
      movies: [...movies, action.movie],
      saveMovieLoading: false,
    };
  })
);
