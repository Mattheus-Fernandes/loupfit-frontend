import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent {

  @Input() labelBtn: string = ""
  @Input() iconBtn: 'login' | 'store' = 'login'
  @Input() routerLink: string = ""


  get icon(): string {
    return this.iconBtn === "login" ? "login" : "checkroom"
  }

  get btnStyle(): string {
    return this.iconBtn === "login" ? "ui-button--login" : "ui-button--store"
  }
}
