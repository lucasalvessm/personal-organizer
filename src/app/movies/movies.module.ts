import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent,
    MovieModalComponent,
    MovieAddComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class MoviesModule {}
