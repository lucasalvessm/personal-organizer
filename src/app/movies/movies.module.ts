import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MovieService } from './services/movie.service';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [MovieComponent, MovieListComponent],
  imports: [CommonModule, MatCardModule],
  providers: [MovieService],
})
export class MoviesModule {}
