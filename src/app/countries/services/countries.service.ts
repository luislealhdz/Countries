import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  onFetchCountries<ICountry>(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(environment.countriesAPIUrl);
  }
}
