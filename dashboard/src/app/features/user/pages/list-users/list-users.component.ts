import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { UsersResponse } from 'src/app/core/models/types/users-response';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  protected usersList: UsersResponse = []
  protected usersListFiltered: UsersResponse = []

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.getAllUsers()
  }

  private getAllUsers() {
    this._userService.getAllUsers()
      .pipe(take(1))
      .subscribe((res: UsersResponse) => {
        this.usersList = res
        this.usersListFiltered = res
      })
  }

  onClick(value: string) {
    if(value != null) {
      this.onSearch(value)
    } else {
      this.usersListFiltered = this.usersList
    }
  }

  onSearch(value: string) {
    this.usersListFiltered = this.usersList.filter((res: IUser) => res.name.toLowerCase().includes(value.toLowerCase()))
  }
}
