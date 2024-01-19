import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../interfaces/ICountry';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(countries: Country[], search: string): Country[] {
    return countries.filter(country =>
      country.officialName.toLowerCase().includes(search.toLowerCase())
    );
  }
}
