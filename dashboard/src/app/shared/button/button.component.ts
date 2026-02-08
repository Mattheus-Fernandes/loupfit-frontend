import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: string = ""
  @Input() text: string = ""
  @Input() type: string = ""

  get buttonVariant(): string {
    return this.variant == "primary" ? "button--primary" : "button--secondary"
  }
}
