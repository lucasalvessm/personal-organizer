import { Component, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  interval,
  map,
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
  subscriptionList: Subscription[] = [];
  behaviorSubject = new BehaviorSubject<string>('0');
  subject = new Subject();

  constructor() {
    const subscription = interval(1000).pipe(
      filter((valor) => valor % 2 !== 0),
      map((valor) => valor * 2)
    );
    // .subscribe((intervalo) => console.log(intervalo));

    // this.subscriptionList.push(subscription);

    this.behaviorSubject
      .asObservable()
      .pipe(
        map((valor) => valor + 'mensagem legal'),
        retry(3)
      )
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
    this.subscriptionList.forEach((sub) => sub.unsubscribe());
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

  novoValorAsync() {
    setTimeout(
      () => this.behaviorSubject.next('novo valor pro observable'),
      3000
    );
  }
}
