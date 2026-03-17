import { Component, inject, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { UsersResponse } from 'src/app/core/models/types/users-response';
import { UserService } from 'src/app/core/services/user.service';
import { EditUserThead } from './config/edit-user-thead.config';
import { FormEditMode } from 'src/app/core/enums/form-edit-mode.enum';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  private readonly _userService = inject(UserService)

  protected usersList: UsersResponse = []
  protected usersListFiltered: UsersResponse = []
  protected user: IUser = {} as IUser
  protected formOpen: boolean = false
  protected readonly thead = EditUserThead.thead()
  protected readonly formMode = FormEditMode

  public formHeader: { title: string, text: string } = {
    title: "Usuário selecionado",
    text: "Atualize as informações do usuário"
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
