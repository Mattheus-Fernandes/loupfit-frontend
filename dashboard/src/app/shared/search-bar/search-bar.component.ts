import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IInput } from 'src/app/core/models/interfaces/input.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Output() searchValue = new EventEmitter<string>()
  protected searchControl = new FormControl("")
  protected buttonText: "Buscar" | "Limpar" = "Buscar"
  protected searchInput: IInput = {
    icon: 'search',
    name: 'search',
    type: 'text',
    placeholder: 'Pesquisar por nome',
  }

  onClick() {
    if (!this.searchControl.value?.trim()) return

    if (this.buttonText == "Buscar") {
      this.onSearch()
    } else {
      this.onClear()
    }
  }

  onSearch() {
    this.buttonText = "Limpar"
    this.searchValue.emit(this.searchControl.value as string)
  }

  onClear() {
    this.buttonText = "Buscar"
    this.searchValue.emit("")
    this.searchControl.reset()
  }
}
