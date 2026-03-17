import { Component, inject, OnInit } from '@angular/core';
import { UsersResponse } from 'src/app/core/models/types/users-response';
import { UserService } from 'src/app/core/services/user.service';
import { EditPermissionThead } from './config/edit-permission-thead.config';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { FormEditMode } from 'src/app/core/enums/form-edit-mode.enum';

@Component({
  selector: 'app-edit-permission',
  templateUrl: './edit-permission.component.html',
  styleUrls: ['./edit-permission.component.scss']
})
export class EditPermissionComponent implements OnInit {

  private readonly _userService = inject(UserService)

  protected usersList: UsersResponse = []
  protected usersListFiltered: UsersResponse = []
  protected readonly thead = EditPermissionThead.thead()
  protected readonly FormMode = FormEditMode

  public user: IUser = {} as IUser
  public formOpen: boolean = false
  public formHeader: { title: string, text: string } = {
    title: "Usuário selecionado",
    text: "Atualize a permissão do usuário"
  }

  ngOnInit() {
    this.getAllUsers()
  }

  private getAllUsers() {
    this._userService.getAllUsers().subscribe(
      (res: UsersResponse) => {
        this.usersList = res
        this.usersListFiltered = this.usersList
      }
    )
  }

  selectedUser(user: IUser) {
    this.formOpen = true

    this.user = user
  }

  onSearch(value: string) {
    this.usersListFiltered = this.usersList.filter((res: IUser) => res.name.toLowerCase().includes(value.toLowerCase()))
  }

  closeForm(formState: boolean) {
    this.formOpen = formState

    if (!formState) {
      this.getAllUsers()
    }
  }
}
