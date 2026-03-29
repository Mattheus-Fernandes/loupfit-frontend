import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from 'src/app/core/models/types/http-error-response.type';
import { LoginResponse } from '../../types/login-response.type';
import { Login } from '../../types/login.type';
import { LoginFormModel } from '../../models/login-form.model';
import { IInput } from 'src/app/core/models/interfaces/input.interface';
import { LoginInputs } from '../../config/login-inputs.config';
import { ILoginPayload } from '../../interfaces/login-payload.interface';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() subbmitForm = new EventEmitter<ILoginPayload>()
  @Input() httpError!: HttpErrorResponse

  private _errorMsg: string = ""

  protected readonly inputUsername: IInput = LoginInputs.username()
  protected readonly inputPassword: IInput = LoginInputs.password()

  public form: FormGroup<Login> = LoginFormModel.createForm()

  ngOnInit() {
  }

  get errorMessage(): string {
    return this._errorMsg;
  }

  set errorMessage(msg: string) {
    this._errorMsg = msg
  }

  get errorLogin(): string {
    return this.errorMessage || this.httpError?.error.msg as string
  }


  onSubmit() {

    this.errorMessage = ""

    if (this.form.invalid) {
      this.form.markAllAsTouched()

      this.form.setErrors({ submitError: true })

      const hasErrorLogin = this.username.errors || this.password.errors

      if (hasErrorLogin) this.errorMessage = "Preencha todos os campos"

      return
    }

    const FORM_VALUE = this.form.value as ILoginPayload

    this.subbmitForm.emit(FORM_VALUE)
  }

  // CONTROLS
  get username(): FormControl<string> {
    return this.form.controls.username
  }

  get password(): FormControl<string> {
    return this.form.controls.password
  }


  //VALIDATION
  hasError(): boolean {
    const HAS_ERROR_FORM = this.form.getError("submitError")
    const HAS_ERROR_LOGIN = this.httpError?.error.msg != null ? true : false

    if (HAS_ERROR_FORM || HAS_ERROR_LOGIN) return true

    return false
  }
}
