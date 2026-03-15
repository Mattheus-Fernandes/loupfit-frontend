import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { UsersResponse } from 'src/app/core/models/types/users-response';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent {
  @Input() usersList: UsersResponse = []
  @Output() user = new EventEmitter<IUser>()

  get theadList(): string[] {
    return ["Nome", "Sobrenome"]
  }

  btnClickUser(user: IUser) {
    this.user.emit(user)
  }

}
