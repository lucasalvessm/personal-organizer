import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[counter] increment',
  props<{
    valor: number;
  }>()
);

export const lastAction = createAction(
  '[counter] lastAction',
  props<{
    action: 'increment' | 'decrement';
  }>()
);
export const decrement = createAction(
  '[counter] decrement',
  props<{
    valor: number;
  }>()
);
