import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { IAction } from '../../interfaces/action.interface';
import { FormUserInputs } from '../../config/form-user-inputs.config';
import { FormControl, FormGroup } from '@angular/forms';
import { FormUserType } from '../../types/form-user-type.type';
import { FormEditUserModel } from '../../models/form-user-edit.model';
import { FormEditMode } from 'src/app/core/models/enums/form-edit-mode.enum';
import { UserService } from 'src/app/core/services/user.service';
import { take } from 'rxjs';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { IErroForm } from 'src/app/core/models/interfaces/errors/error-form.interface';
import { HttpErrorResponse } from 'src/app/core/models/types/http-error-response.type';
import { ISuccess } from 'src/app/core/models/interfaces/success.interface';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  @Input() title: string = ""
  @Input() action: IAction = {} as IAction

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

  ngOnInit() {
    this.inputPassword.placeholder = "Alterar senha"

    this.form.patchValue({
      name: this.action.user.name,
      lastname: this.action.user.lastname,
      username: this.action.user.username,
      role: this.action.user.role
    })

    this.applyFormMode()
  }

  applyFormMode() {

    if (this.action.type === FormEditMode.PERMISSION) {
      this.name.disable()
      this.lastname.disable()
      this.username.disable()
      this.password.disable()
      this.role.enable()
    }

    if (this.action.type === FormEditMode.USERNAME) {
      this.name.disable()
      this.lastname.disable()
      this.username.enable()
      this.password.disable()
      this.role.disable()
    }
  }

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

    const id = this.action.user.id

    switch (this.action.type) {
      case FormEditMode.PERMISSION:

        const role = this.role.value as string

        this._userService.editRole(id, role)
          .pipe(take(1))
          .subscribe({
            next: () => {
              this.sentForm.emit()
              this.handlerSuccess()
            },
            error: (err: HttpErrorResponse) => {
              this.handleError(err)
            }
          })

        break

      case FormEditMode.USERNAME:
        const username = this.username.value

        this._userService.editUsername(id, username)
          .pipe(take(1))
          .subscribe({
            next: () => {
              this.sentForm.emit()
              this.handlerSuccess()
            },
            error: (err: HttpErrorResponse) => {
              this.handleError(err)
            }
          })

        break

      default:
        const payload = this.form.value as IUser

        this._userService.editUser(id, payload)
          .pipe(take(1))
          .subscribe({
            next: () => {
              this.sentForm.emit()
              this.handlerSuccess()
            },
            error: (err: HttpErrorResponse) => {
              this.handleError(err)
            }
          })

        break
    }

    this.form.reset()

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
      msg: "Usuário editado com sucesso",
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
