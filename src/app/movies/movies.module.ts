import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../common/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent,
    MovieModalComponent,
    MovieAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: 'list',
        component: MovieListComponent,
      },
      {
        path: 'add-movie',
        component: MovieAddComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
    ]),
  ],
})
export class MoviesModule {}
