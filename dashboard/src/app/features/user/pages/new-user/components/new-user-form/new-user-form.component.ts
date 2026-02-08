import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoleList } from '../../models/types/role-list.type';
import { UserRole } from 'src/app/core/enums/user-role.enum';
import { IInput } from 'src/app/core/models/interfaces/input.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IErroForm } from 'src/app/core/models/interfaces/errors/error-form.interface';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { take } from 'rxjs';
import { HttpErrorResponse } from 'src/app/core/models/types/http-error-response.type';



@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>()

  public form!: FormGroup
  public success: boolean = false
  protected error: IErroForm = {} as IErroForm
  protected roleList: RoleList = [
    { value: UserRole.OWNER, text: "Proprietário" },
    { value: UserRole.ADMIN, text: "Administrador" },
    { value: UserRole.EDITOR, text: "Editor" },
    { value: UserRole.VIEWER, text: "Visualizador" }
  ]
  protected nameInput: IInput = {
    icon: 'person',
    name: 'name',
    type: 'text',
    placeholder: 'Nome'
  }
  protected lastnameInput: IInput = {
    icon: 'person',
    name: 'lastname',
    type: 'text',
    placeholder: 'Sobrenome'
  }
  protected usernameInput: IInput = {
    icon: 'person_shield',
    name: 'username',
    type: 'text',
    placeholder: 'Usuário',
  }
  protected passwordInput: IInput = {
    icon: 'lock',
    name: 'password',
    type: 'password',
    placeholder: 'Senha',
    suffix: 'visibility_off'
  }

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.form = this._fb.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      role: [null, Validators.required]
    })
  }

  //CONTROLS

  get name(): FormControl {
    return this.form.get("name") as FormControl
  }

  get lastname(): FormControl {
    return this.form.get("lastname") as FormControl
  }


  get username(): FormControl {
    return this.form.get("username") as FormControl
  }

  get password(): FormControl {
    return this.form.get("password") as FormControl
  }

  get role(): FormControl {
    return this.form.get("role") as FormControl
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

    const payload: IUser = this.form.value

    this._userService.registerUser(payload)
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
}
