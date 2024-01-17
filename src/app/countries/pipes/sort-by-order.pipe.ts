import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../interfaces/ICountry';

@Pipe({
  name: 'sortByOrder',
  standalone: true
})
export class SortByOrderPipe implements PipeTransform {
  transform(listCountries: Country[]): Country[] {
    return listCountries.sort((a: Country, b: Country) =>
      a.officialName.localeCompare(b.officialName)
    );
  }
}
