import { Component } from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
} from '@angular/common';
import { PipesPipe } from './pipes.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe, JsonPipe, LowerCasePipe, PipesPipe, CurrencyPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  dateAsString = '10/12/2012';
  date2 = new Date();

  jsonObject = {
    nome: 'Lucas',
    idade: 29,
    sexo: 'Masculino',
  };

  frase = 'Um Ninho de Mafagafos, tem 3 Mafagafinhos';

  saldo = 23.4;
}
