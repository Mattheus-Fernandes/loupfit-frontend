import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormUserInputs } from '../../config/form-user-inputs.config';
import { FormEditUserModel } from '../../models/form-user-edit.model';
import { FormUserType } from '../../types/form-user-type.type';
import { IErroForm } from 'src/app/core/models/interfaces/errors/error-form.interface';
import { ISuccess } from 'src/app/core/models/interfaces/success.interface';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { take } from 'rxjs';
import { HttpErrorResponse } from 'src/app/core/models/types/http-error-response.type';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  @Output() close = new EventEmitter<void>()
  @Output() sentForm = new EventEmitter<void>()

  private readonly _userService = inject(UserService)

  protected inputName = FormUserInputs.inputName()
  protected inputLastname = FormUserInputs.inputLastname()
  protected inputUsername = FormUserInputs.inputUsername()
  protected inputPassword = FormUserInputs.inputPassword()
  protected roleOptions = FormUserInputs.roleList()
  protected form: FormGroup<FormUserType> = FormEditUserModel.createForm()

  public error: IErroForm = {} as IErroForm
  public success: ISuccess = {} as ISuccess


  btnCancel() {
    this.close.emit()
  }

  onSubmit() {
    this.success.msg = ""
    this.error.msg = ""

    if (this.form.invalid) {
      this.error = {
        msg: "Preencha todos os campos*",
        hasError: true
      }
      this.form.markAllAsTouched()
      return
    }

    const payload = this.form.value as IUser

    this._userService.registerUser(payload)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.sentForm.emit()
          this.handlerSuccess()
          this.form.reset()
        },
        error: (err: HttpErrorResponse) => {
          this.handleError(err)
        }
      })
  }

  handleError(err: HttpErrorResponse) {
    this.error = {
      msg: err.error.msg as string,
      hasError: true
    }
  }

  handlerSuccess() {
    this.error.hasError = false

    this.success = {
      msg: "Usuário criado com sucesso",
      subbmited: true
    }
  }

  // CONTROLS 
  get name(): FormControl<string> {
    return this.form.controls.name
  }

  get lastname(): FormControl<string> {
    return this.form.controls.lastname
  }

  get username(): FormControl<string> {
    return this.form.controls.username
  }

  get password(): FormControl<string | null> {
    return this.form.controls.password
  }

  get role(): FormControl<string | null> {
    return this.form.controls.role
  }

  // VERIFICATION
  isInvalid(control: FormControl, errorName: string = "required"): boolean {
    return control.hasError(errorName) && control.touched
  }

}
