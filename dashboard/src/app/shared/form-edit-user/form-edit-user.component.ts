import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { take } from 'rxjs';
import { FormEditMode } from 'src/app/core/models/enums/form-edit-mode.enum';

import { IErroForm } from 'src/app/core/models/interfaces/errors/error-form.interface';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { EditUserInput } from 'src/app/features/user/pages/edit-users/config/edit-user-inputs.config';
import { EditFormModel } from './models/edit-form-model';
import { EditUserForm } from './types/edit-user-form.type';


@Component({
  selector: 'app-form-edit-user',
  templateUrl: './form-edit-user.component.html',
  styleUrls: ['./form-edit-user.component.scss']
})
export class FormEditUserComponent {
  @Input() formTitle: string = ""
  @Input() formText: string = ""
  @Input() user: IUser = {} as IUser
  @Input() formMode: FormEditMode = FormEditMode.EDIT
  @Output() closeForm = new EventEmitter<boolean>()

  protected success: boolean = false
  protected error: IErroForm = {} as IErroForm
  protected inputName = EditUserInput.inputName()
  protected inputLastname = EditUserInput.inputLastname()
  protected inputUsername = EditUserInput.inputUsername()
  protected inputPassword = EditUserInput.inputPassword()
  protected roleList = EditUserInput.roleList()

  public form: FormGroup<EditUserForm> = EditFormModel.createForm()

  private readonly _userService = inject(UserService)

  ngOnInit() {
    this.inputPassword.placeholder = "Alterar senha"

    this.applyMode()

    this.form.patchValue({
      name: this.user.name,
      lastname: this.user.lastname,
      username: this.user.username,
      role: this.user.role
    })
  }

  btnCloseForm() {
    this.closeForm.emit(false)
  }

  private applyMode() {

    if (this.formMode === FormEditMode.PERMISSION) {
      this.name.disable()
      this.lastname.disable()
      this.username.disable()
      this.password.disable()
      this.role.enable()
    }

    if (this.formMode === FormEditMode.USERNAME) {
      this.name.disable()
      this.lastname.disable()
      this.username.enable()
      this.password.disable()
      this.role.disable()
    }
  }

  onSubmit() {

    if (this.form.invalid) {
      this.error = {
        msg: "Preencha todos os campos*",
        hasError: true
      }
      this.form.markAllAsTouched()
      return
    }

    const id = this.user.id
    const payload = this.form.value as IUser

    if (this.formMode === FormEditMode.PERMISSION) {
      const role = this.role.value as string

      this._userService.editRole(id, role)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.handleSuccess()
          },
          error: (err: HttpErrorResponse) => {
            this.handleError(err)
          }
        })

      return

    } else if (this.formMode === FormEditMode.USERNAME) {
      const username = this.username.value as string

      this._userService.editUsername(id, username)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.handleSuccess()
          },
          error: (err: HttpErrorResponse) => {
            this.handleError(err)
          }
        })

        return

    }

    else {
      this._userService.editUser(id, payload)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.handleSuccess()
          },
          error: (err: HttpErrorResponse) => {
            this.handleError(err)
          }
        })
    }
  }

  private handleSuccess() {
    this.error.hasError = false
    this.success = true

    setTimeout(() => {
      this.success = false
    }, 5000)

    this.form.reset()
  }

  private handleError(err: HttpErrorResponse) {
    this.error = {
      msg: err.error.msg as string,
      hasError: true
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
