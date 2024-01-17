import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country, ICountry } from '../../interfaces/ICountry';
import { map } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';
import { SortByOrderPipe } from '../../pipes/sort-by-order.pipe';
import { FiltersComponent } from '../../components/filters/filters.component';

@Component({
  selector: 'app-list-countries',
  standalone: true,
  imports: [CardComponent, SortByOrderPipe, FiltersComponent],
  templateUrl: './list-countries.component.html',
  styleUrl: './list-countries.component.scss'
})
export class ListCountriesComponent implements OnInit {
  listCountries: Country[] = [];

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
            flag: country.flag
          }))
        )
      )
      .subscribe(countries => {
        this.listCountries = countries;
      });
  }
}
