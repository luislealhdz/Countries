import { Pipe, PipeTransform } from '@angular/core';
import { Languages } from '../interfaces/ICountry';

@Pipe({
  name: 'getLanguages',
  standalone: true
})
export class GetLanguagesPipe implements PipeTransform {
  transform(languages: Languages | undefined): string[] | string {
    return !languages ? 'No language to display' : Object.values(languages);
  }
}
