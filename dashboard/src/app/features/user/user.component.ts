import { Component, inject, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { UsersResponse } from 'src/app/core/models/types/users-response';
import { UserService } from 'src/app/core/services/user.service';
import { IAction } from './interfaces/action.interface';
import { UserModal } from './types/user-modal.type';
import { IUser } from 'src/app/core/models/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private readonly _userService = inject(UserService)

  protected listUsers: UsersResponse = []
  protected listUsersFiltered: UsersResponse = []
  protected user: IUser = {} as IUser

  public action: IAction = {} as IAction
  public title: string = ""
  public currentModal: UserModal = null

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    this._userService.getAllUsers()
      .pipe(take(1))
      .subscribe(
        (res: UsersResponse) => {
          this.listUsers = res
          this.listUsersFiltered = res
        }
      )
  }

  onSuccess() {
    this.getAllUsers()
  }

  openNewModal() {
    this.currentModal = "new"
  }

  openDeleteModal() {
    this.currentModal = "delete"
  }

  openEditModal() {
    this.currentModal = "edit"
  }

  closeModal() {
    this.currentModal = null
  }

  onSearch(value: string) {
    this.listUsersFiltered = this.listUsers.filter((user: IUser) => user.name.toLowerCase().includes(value.toLowerCase()))
  }

  onSelected(value: IAction) {
    this.action = value
    this.title = this.formTitle(value.type)
    this.user = value.user

    if (value.type === "delete") {
      this.openDeleteModal()
    } else {
      this.openEditModal()
    }
  }

  formTitle(type: string): string {
    switch (type) {
      case "edit":
        return "Editar usuário"

      case "permission":
        return "Alterar permissão"

      case "username":
        return "Editar usuário"

      default:
        return type
    }
  }

  get editModal(): boolean {
    return this.currentModal === "edit" ? true : false
  }

  get newModal(): boolean {
    return this.currentModal === "new" ? true : false
  }

  get deleteModal(): boolean {
    return this.currentModal === "delete" ? true : false
  }
}
