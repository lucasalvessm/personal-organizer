import { Component, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  interval,
  map,
  of,
  retry,
  Subject,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss',
})
export class ObservablesComponent implements OnDestroy {
  subscription: Subscription | undefined;
  behaviorSubject = new BehaviorSubject<string>('0');
  subject = new Subject();

  constructor() {
    // const subscription = interval(1000).subscribe((intervalo) =>
    //   console.log(intervalo)
    // );

    // const subscription = interval(1000)
    //   .pipe(
    //     filter((valor) => valor % 2 !== 0),
    //     map((valor) => valor * 2)
    //   )
    //   .subscribe((intervalo) => console.log(intervalo));

    // this.subscription = subscription;

    of('').subscribe((valor) => console.log(valor));

    this.behaviorSubject
      .asObservable()
      .pipe(retry(3))
      .subscribe({
        next: (value) => {
          console.log(value);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('observable finalizado');
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  novoValor() {
    this.behaviorSubject.next('novo valor pro observable');
  }

  novoValorError() {
    this.behaviorSubject.error('error');
  }

  novoValorComplete() {
    this.behaviorSubject.complete();
  }
}
