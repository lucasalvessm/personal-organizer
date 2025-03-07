import { createReducer, on } from '@ngrx/store';
import { decrement, increment, lastAction } from './counter.actions';

export interface CounterState {
  count: number;
  action: 'increment' | 'decrement' | 'none';
}

const initialState: CounterState = {
  count: 0,
  action: 'none',
};

export const counterReducer = createReducer(
  initialState,

  on(increment, (state, action) => {
    if (action.valor) {
      return {
        ...state,
        count: state.count + action.valor,
      };
    } else {
      return {
        ...state,
        count: state.count + 1,
      };
    }
  }),
  on(decrement, (state, action) => {
    if (action.valor) {
      return {
        ...state,
        count: state.count - action.valor,
      };
    } else {
      return {
        ...state,
        count: state.count - 1,
      };
    }
  }),
  on(lastAction, (state, action) => {
    return {
      ...state,
      action: action.action,
    };
  })
);
