import { inject, Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay, Observable, switchMap, tap } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
export class MovieService {
  private api =
    'https://crudcrud.com/api/b017743fd9ca4328a520762f3445939a/movies';

  httpClient = inject(HttpClient);

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.api).pipe(delay(1000));
  }

  save(movie: Movie): Observable<any> {
    return this.httpClient.post(this.api, movie);
  }

  delete(movieToDelete: Movie): Observable<any> {
    return this.httpClient.delete(`${this.api}/${movieToDelete._id}`);
  }
}
