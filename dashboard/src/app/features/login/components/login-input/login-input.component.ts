import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpErrorResponse } from 'src/app/core/models/types/http-error-response.type';
import {  ILoginInput } from 'src/app/features/login/models/interfaces/login-input.interface';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss']

})
export class LoginInputComponent {
  @Input() loginInput: ILoginInput = {} as ILoginInput
  @Input() control!: FormControl
  @Input() httpError!: HttpErrorResponse
  @Input() invalidLogin!: boolean 
  @Input() name!: string
  @Output() toggleInput = new EventEmitter<boolean>()

  showPassword!: boolean

  changeSuffix() {
    this.showPassword = !this.showPassword
    this.toggleInput.emit(this.showPassword)
  }

  get hasError(): boolean {
    return this.httpError?.error.msg != null ? true : false
  }
}
