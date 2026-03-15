import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { take } from 'rxjs';
import { IErroForm } from 'src/app/core/models/interfaces/errors/error-form.interface';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { EditUserForm } from '../../types/edit-user-form.type';
import { EditFormModel } from '../../models/edit-form-model';
import { EditUserInput } from '../../config/edit-user-inputs.config';

@Component({
  selector: 'app-edit-users-form',
  templateUrl: './edit-users-form.component.html',
  styleUrls: ['./edit-users-form.component.scss']
})
export class EditUsersFormComponent implements OnInit {
  @Input() user: IUser = {} as IUser
  @Output() cancel = new EventEmitter<boolean>()

  public form: FormGroup<EditUserForm> = EditFormModel.createEditForm()
  public success: boolean = false
  protected error: IErroForm = {} as IErroForm

  protected inputName = EditUserInput.inputName()
  protected inputLastname = EditUserInput.inputLastname()
  protected inputUsername = EditUserInput.inputUsername()
  protected inputPassword = EditUserInput.inputPassword()
  protected roleList = EditUserInput.roleList()

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.inputPassword.placeholder = "Alterar senha"

    this.form.patchValue({
      name: this.user.name,
      lastname: this.user.lastname,
      username: this.user.username,
      role: this.user.role
    })
  }

  btnCancel() {
    this.cancel.emit(false)
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

    this._userService.editUser(id, payload)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.error.hasError = false
          this.success = true

          setTimeout(() => {
            this.success = false
          }, 5000)

          this.form.reset()
        },
        error: (err: HttpErrorResponse) => {
          this.error = {
            msg: err.error.msg as string,
            hasError: true
          }
        }
      })
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
