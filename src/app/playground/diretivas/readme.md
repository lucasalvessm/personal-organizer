## Imports

NgClass,
NgStyle,
NgIf,
NgFor,
NgSwitch,
NgSwitchCase

### 3 NgFor

    <div
      class="box"
      *ngFor="let number of numbers; index as i"
      (click)="removeItem(i)"
    >
      {{ number }} from index {{ i }}
    </div>

`removeItem(index: number) {
    this.numbers.splice(index, 1);
  }`

    @for(number of numbers; track number; let i = $index) {
    <div class="box" (click)="removeItem(i)">
    {{ number }} from index {{ i }}
    </div>
    }

### 4 NgSwitch

    <div [ngSwitch]="expressao">
      <div class="box" *ngSwitchCase="'200'">Sucesso</div>
      <div class="box" *ngSwitchCase="'400'">Erro cliente</div>
    </div>


    @switch(expressao) { @case ('200') {
    <div class="box">Sucesso</div>

    } @case ('400') {
    <div class="box">Erro cliente</div>

    } @case ('500') {
    <div class="box">Erro servidor</div>

    } }
