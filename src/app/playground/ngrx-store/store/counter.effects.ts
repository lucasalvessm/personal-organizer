import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment, lastAction } from './counter.actions';
import { of, switchMap } from 'rxjs';

@Injectable()
export class CounterEffects {
  actions$ = inject(Actions);

  saveCount = createEffect(() => {
    return this.actions$.pipe(
      ofType(increment, decrement),
      switchMap((action) => {
        if (action.type.includes('increment')) {
          return of(lastAction({ action: 'increment' }));
        } else {
          return of(lastAction({ action: 'decrement' }));
        }
      })
    );
  });
}
