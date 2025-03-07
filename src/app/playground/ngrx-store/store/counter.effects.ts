import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment, lastAction } from './counter.actions';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { counterSelect } from './counter.selectors';

@Injectable()
export class CounterEffects {
  actions$ = inject(Actions);
  store = inject(Store);

  saveCount = createEffect(() => {
    return this.actions$.pipe(
      ofType(increment, decrement),
      withLatestFrom(this.store.select(counterSelect)),
      switchMap(([action, store]) => {
        if (action.type.includes('increment')) {
          return of(lastAction({ action: 'increment' }));
        } else {
          return of(lastAction({ action: 'decrement' }));
        }
      })
    );
  });
}
