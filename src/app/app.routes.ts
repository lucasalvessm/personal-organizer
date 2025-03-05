import { Routes } from '@angular/router';
import { MovieListComponent } from './movies/components/movie-list/movie-list.component';
import { DiretivasComponent } from './playground/diretivas/diretivas.component';
import { MovieAddComponent } from './movies/components/movie-add/movie-add.component';
import { PipesComponent } from './playground/pipes/pipes.component';
import { LifecycleParentComponent } from './playground/lifecycle/lifecycle-parent/lifecycle-parent.component';
import { ObservablesComponent } from './playground/observables/observables.component';

export const routes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: 'add-movie',
    component: MovieAddComponent,
  },
  {
    path: 'diretivas',
    component: DiretivasComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'lifecycle',
    component: LifecycleParentComponent,
  },
  {
    path: 'observables',
    component: ObservablesComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies',
  },
];
