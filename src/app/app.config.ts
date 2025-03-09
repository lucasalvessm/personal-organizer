import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { counterReducer } from './playground/ngrx-store/store/counter.reducer';
import { CounterEffects } from './playground/ngrx-store/store/counter.effects';
import { movieReducer } from './movies/store/movie.reducer';
import { MovieEffects } from './movies/store/movie.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideStore({
      counter: counterReducer,
      movie: movieReducer,
    }),
    provideEffects([CounterEffects, MovieEffects]),
    provideStoreDevtools(),
  ],
};
