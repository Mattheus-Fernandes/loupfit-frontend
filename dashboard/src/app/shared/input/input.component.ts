import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IInput } from 'src/app/core/models/interfaces/input.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() input: IInput = {} as IInput
  @Input() control!: FormControl
  @Input() error: boolean = false
  @Input() mask: string = ""
  @Input() prefix: string = ""
  @Input() thousandSeparator: string = ""
  @Input() decimalMarker: any = ""

  @Output() toggleInput = new EventEmitter<boolean>()

  showPassword: boolean = false

  changeSuffix() {
    this.showPassword = !this.showPassword;
  }
}
