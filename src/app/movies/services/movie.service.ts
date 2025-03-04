import { inject, Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private api =
    'https://crudcrud.com/api/2b8f268866dd454d9a47cdd9d84f55f0/movies';

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
