import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  Input,
  ViewChildren,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-child-child',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-child.component.html',
  styleUrl: './lifecycle-child.component.scss',
})
export class LifecycleChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  teste = 12;

  stringue = '123';
  static stringueStatic = '123';

  @Input() valor: string | undefined;

  @ViewChildren('conteudoExtra') conteudoExtra: HTMLDivElement | undefined;
  @ContentChild('contentProjection') contentProjection: HTMLElement | undefined;

  static {
    console.log('block initializer');
    console.log(LifecycleChildComponent.stringueStatic);
  }

  //métodos de execução única

  //construção e inicialização da classe.
  constructor() {
    console.log('constructor');
  }

  //chamado após a inicialização do data binding
  // @Input
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  //Quando o conteúdo <ng-content> é inserido
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log(this.contentProjection);
  }

  //quando o HTML é renderizado
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.conteudoExtra);
  }

  //chamado somente quando o componente for removido do dom
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  // métodos executados possivelmente várias vezes

  //toda vez que recebe valores novos
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  //
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
}
