import { ElementRef } from '@angular/core';
import { TestDirective } from './test.directive';

describe('TestDirective', () => {
  const el: ElementRef = jasmine.createSpyObj(
    'ElementRef',
    {},
    {
      nativeElement: {
        style: {
          background: 'white',
        },
      },
    }
  );

  it('should create an instance', () => {
    const directive = new TestDirective(el);
    expect(directive).toBeTruthy();
  });

  it('should change the background to black', () => {
    new TestDirective(el);
    expect(el.nativeElement.style.background).toBe('black');
  });
});
