## NgClass

    <div
        class="box"
        [ngClass]="{
        estilo1: condicao1,
        estilo2: condicao2,
        'is-active': isActive
        }"
    >
        Me estiliza (ngClass)
    </div>

## NgStyle

      <div
        class="box"
        [ngStyle]="{
        'background-color': isActive ? 'purple' : 'green'
        }"

        >

            Me estiliza (ngStyle)
    </div>

## Diretiva custom

    export class TestDirective {
        constructor(private el: ElementRef) {
            this.el.nativeElement.style.background = 'black';
        }
    }
