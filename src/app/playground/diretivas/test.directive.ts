import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTest]',
  standalone: true,
})
export class TestDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.background = 'black';
  }
}
