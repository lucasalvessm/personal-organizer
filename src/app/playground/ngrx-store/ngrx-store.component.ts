import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from './store/counter.actions';
import { FormsModule } from '@angular/forms';
import {
  counterLastActionSelect,
  counterSelect,
  doubleCounterSelect,
} from './store/counter.selectors';

@Component({
  selector: 'app-ngrx-store',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  templateUrl: './ngrx-store.component.html',
  styleUrl: './ngrx-store.component.scss',
})
export class NgrxStoreComponent {
  store = inject(Store);
  number: number | undefined;

  counter$ = this.store.select(counterSelect);
  counterLastAction$ = this.store.select(counterLastActionSelect);
  doubleCounter$ = this.store.select(doubleCounterSelect);

  public increment(): void {
    let valorParaIncrementar: number = this.number || 1;

    this.store.dispatch(
      increment({
        valor: valorParaIncrementar,
      })
    );
  }

  public decrement(): void {
    let valorParaDecrementar: number = this.number || 1;

    this.store.dispatch(
      decrement({
        valor: valorParaDecrementar,
      })
    );
  }
}
