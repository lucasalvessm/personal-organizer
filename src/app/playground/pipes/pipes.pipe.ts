import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeLegal',
  standalone: true,
})
export class PipesPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(args.map(() => '+1').join(' '));
    return `${value} :) ${args.map(() => '+1').join(' ')}`;
  }
}
