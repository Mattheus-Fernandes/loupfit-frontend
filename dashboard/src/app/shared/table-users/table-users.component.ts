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
  @Input() thead: string[] = []
  @Input() columnKey!: 'lastname' | 'role' | 'username'
  @Output() selectedUser = new EventEmitter<IUser>()

  onClick(user: IUser) {
    this.selectedUser.emit(user)
  }


}
