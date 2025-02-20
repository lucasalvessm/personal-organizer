import {
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
} from '@angular/common';
import { Component } from '@angular/core';
import { TestDirective } from './test.directive';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    TestDirective,
  ],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.scss',
})
export class DiretivasComponent {
  condicao1 = true;
  condicao2 = false;

  numbers = [1, 2, 3, 4, 5];

  expressao: '400' | '500' | '200' = '500';

  isActive = true;

  removeItem(index: number) {
    this.numbers.splice(index, 1);
  }
}
