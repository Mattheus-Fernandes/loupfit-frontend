import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoginInput } from 'src/app/features/login/models/interfaces/login-input.interface';
import { HttpErrorResponse } from 'src/app/core/models/types/http-error-response.type';
import { LoginResponse } from '../../models/types/login-response copy';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() subbmitForm = new EventEmitter<LoginResponse>()
  @Input() httpError!: HttpErrorResponse

  private _errorMsg: string = ""

  protected inputUser: ILoginInput = {
    name: "user",
    icon: "person",
    type: "text",
    placeholder: "Usuário"
  }

  protected inputPassword: ILoginInput = {
    name: "password",
    icon: "lock",
    type: "password",
    placeholder: "Senha",
    suffix: "visibility_off"
  }

  protected toggleSuffix(event: boolean) {
    this.inputPassword.suffix = event ? "visibility_off" : "visibility"
    this.inputPassword.type = event ? "text" : "password"

  }

  public form!: FormGroup

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this._fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  get getUser(): FormControl {
    return this.form.get("username") as FormControl
  }

  get getPassword(): FormControl {
    return this.form.get("password") as FormControl
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

  get submittError(): boolean {
    return this.form.getError("submitError") ? true : false
  }

  get invalidLoginError(): boolean {
    return this.httpError?.error.msg != null ? true : false
  }

  onSubmit(): void {

    this.errorMessage = ""

    if (this.form.invalid) {
      this.form.markAllAsTouched()

      this.form.setErrors({ submitError: true })

      const hasErrorLogin = this.getUser.errors || this.getPassword

      if (hasErrorLogin) this.errorMessage = "Preencha todos os campos"

      return
    }

    this.subbmitForm.emit(this.form.value)
  }
}
