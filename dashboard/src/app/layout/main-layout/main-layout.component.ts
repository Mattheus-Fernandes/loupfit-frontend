import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, fromEvent, map, startWith } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  public isMenuOpen: boolean = false

  activeMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  inactiveMenu() {
    this.isMenuOpen = false
  }
}
