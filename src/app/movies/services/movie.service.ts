import { inject, Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private api =
    'https://crudcrud.com/api/e18f9e31f2e04e7fb999b8f0a4a40377/movies';

  httpClient = inject(HttpClient);

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.api);
  }

  save(movie: Movie): Observable<any> {
    return this.httpClient.post(this.api, movie);
  }

  delete(movie: Movie): Observable<any> {
    return this.httpClient.delete(`${this.api}/${movie._id}`);
  }
}
