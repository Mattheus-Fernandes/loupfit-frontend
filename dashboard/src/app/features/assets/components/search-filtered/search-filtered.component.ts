import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-filtered',
  templateUrl: './search-filtered.component.html',
  styleUrls: ['./search-filtered.component.scss']
})
export class SearchFilteredComponent {
  @Input() listUsernames: string[] = []
  @Output() onFilter = new EventEmitter<string>()
  @Output() removerFilter = new EventEmitter<void>()

  protected userControl = new FormControl("", Validators.required)

  public doFilter: boolean = false
  public openModal: boolean = false
  public title: string = "Filtro"
  public error: string = ""

  filter() {
    this.doFilter = !this.doFilter
    this.openModal = true
    this.title = "Remover filtro"
  }

  closeModal() {
    this.openModal = false
    this.title = "Filtro"
    this.doFilter = false
  }

  onRemoveFilter() {
    this.closeModal()
    this.removerFilter.emit()
  }

  onApplyFilter() {
    this.error = ""

    const CONTROL_INVALID = this.userControl.value == null || !this.userControl.value

    if (CONTROL_INVALID) {
      this.error = "Selecione um usuário*"
      this.userControl.markAsTouched()
      return
    }

    this.openModal = false
    const username = String(this.userControl.value).toLowerCase()
    this.onFilter.emit(username)
  }

  get userSelected(): boolean {
    return this.userControl.hasError("required") && this.userControl.touched
  }

}
