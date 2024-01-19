import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country, ICountry } from '../../interfaces/ICountry';
import { map } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';
import { SortByOrderPipe } from '../../pipes/sort-by-order.pipe';
import { FiltersComponent } from '../../components/filters/filters.component';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-list-countries',
  standalone: true,
  templateUrl: './list-countries.component.html',
  styleUrl: './list-countries.component.scss',
  imports: [CardComponent, SortByOrderPipe, FiltersComponent, FilterPipe]
})
export class ListCountriesComponent implements OnInit {
  listCountries: Country[] = [];
  searchTerm: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.onFetchCountriesData();
  }

  onFetchCountriesData(): void {
    this.countriesService
      .onFetchCountries<ICountry>()
      .pipe(
        map((country: ICountry[]) =>
          country.map(country => ({
            officialName: country.name.official,
            capital: country.capital,
            region: country.region,
            languages: country.languages,
            population: country.population,
            flag: country.flags.png
          }))
        )
      )
      .subscribe(countries => {
        this.listCountries = countries;
      });
  }

  onSearchChanged(searchTerm: string) {
    this.searchTerm = searchTerm;
    console.log(searchTerm);
  }
}
