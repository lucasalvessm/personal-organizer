import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

export const counterStoreSelect =
  createFeatureSelector<CounterState>('counter');

export const doubleCounterSelect = createSelector(
  counterStoreSelect,
  (state: CounterState) => state.count * 2
);

export const counterSelect = createSelector(
  counterStoreSelect,
  (state: CounterState) => state.count
);
export const counterLastActionSelect = createSelector(
  counterStoreSelect,
  (state: CounterState) => state.action
);
