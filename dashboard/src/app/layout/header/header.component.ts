import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() menuOpen: boolean = false
  @Output() activeMenu = new EventEmitter<void>();

  btnMenu() {
    this.activeMenu.emit()
  }

  get icon(): string {
    return this.menuOpen == true ? "close" : "menu"
  }
}
