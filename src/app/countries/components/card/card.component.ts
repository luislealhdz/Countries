import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/ICountry';
import { GetCapitalPipe } from '../../pipes/get-capital.pipe';
import { GetLanguagesPipe } from '../../pipes/get-languages.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [GetCapitalPipe, GetLanguagesPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() country!: Country;
}
