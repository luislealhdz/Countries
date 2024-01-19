import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  order: string = 'Descending';
  @Output() searchValueChanged = new EventEmitter<string>();
  searchTerm: string = '';

  constructor() {}

  onSearchValueChanged() {
    this.searchValueChanged.emit(this.searchTerm);
    console.log(this.searchTerm);
  }
}
