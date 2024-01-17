import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCapital',
  standalone: true
})
export class GetCapitalPipe implements PipeTransform {
  transform(capital: string[] | undefined): string {
    return !capital || capital.length === 0 ? 'No capital' : capital.join(', ');
  }
}
