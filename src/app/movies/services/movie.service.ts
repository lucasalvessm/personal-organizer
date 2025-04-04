import { inject, Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay, Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  moviesSubject = new BehaviorSubject<Movie[]>([]);
  movies$ = this.moviesSubject.asObservable();

  private api = 'http://localhost:3000/movies';

  httpClient = inject(HttpClient);

  getMovies(): Observable<Movie[]> {
    if (this.moviesSubject.getValue()?.length) {
      return this.movies$;
    }

    return this.httpClient.get<Movie[]>(this.api).pipe(
      delay(1000),
      switchMap((movies) => {
        this.moviesSubject.next(movies);
        return this.movies$;
      })
    );
  }

  save(movie: Movie): Observable<any> {
    return this.httpClient.post(this.api, movie).pipe(
      tap((result) => {
        const movies = [...this.moviesSubject.getValue(), result] as Movie[];

        this.moviesSubject.next(movies);
      })
    );
  }

  delete(movieToDelete: Movie): Observable<any> {
    return this.httpClient.delete(`${this.api}/${movieToDelete.id}`).pipe(
      tap(() => {
        const movies = this.moviesSubject
          .getValue()
          .filter((movie) => movie.id !== movieToDelete.id);

        this.moviesSubject.next(movies);

        this.getMovies();
      })
    );
  }
}
