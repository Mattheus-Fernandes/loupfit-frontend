import { Component, inject, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { UsersResponse } from 'src/app/core/models/types/users-response';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  private _userService = inject(UserService)
  protected usersList: UsersResponse = []
  protected usersListFiltered: UsersResponse = []
  protected user: IUser = {} as IUser
  protected formOpen: boolean = false

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

  getUser(user: IUser) {
    this.formOpen = true

    if (user) {
      this.user = user
    }
  }

  onSearch(value: string) {
    this.usersListFiltered = this.usersList.filter((res: IUser) => res.name.toLowerCase().includes(value.toLowerCase()))
  }

  formState(state: boolean) {
    this.formOpen = state

    if (!state) {
      this.usersListFiltered = this.usersList
    }
  }

}
