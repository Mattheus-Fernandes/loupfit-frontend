import { Component, inject, OnInit } from '@angular/core';
import { FormEditMode } from 'src/app/core/models/enums/form-edit-mode.enum';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { UsersResponse } from 'src/app/core/models/types/users-response';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-edit-username',
  templateUrl: './edit-username.component.html',
  styleUrls: ['./edit-username.component.scss']
})
export class EditUsernameComponent implements OnInit{

  private readonly _userService = inject(UserService)

  protected usersList: UsersResponse = []
  protected usersListFiltered: UsersResponse = []
  protected readonly formMode = FormEditMode

  public user: IUser = {} as IUser
  public formOpen: boolean = false
  public formHeader: { title: string, text: string } = {
    title: "Usuário selecionado",
    text: "Atualize o usuário de acesso"
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
