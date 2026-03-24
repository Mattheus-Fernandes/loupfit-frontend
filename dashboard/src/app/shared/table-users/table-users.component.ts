import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { TableColumn } from 'src/app/core/models/types/table-column.type';
import { UsersResponse } from 'src/app/core/models/types/users-response';


@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent {
  @Input() usersList: UsersResponse = []
  @Input() thead: string[] = []
  @Input() columns!: TableColumn[]
  @Output() selectedUser = new EventEmitter<IUser>()

  onClick(user: IUser) {
    this.selectedUser.emit(user)
  }

  definedColumns(colums: TableColumn[]): string {
    const columnsSize = colums.length

    return `repeat(${columnsSize}, 1fr)`
  }

  roleColor(role: string) {

    switch (role) {
      case "OWNER":
        return "table__td--owner"

      case "ADMIN":
        return "table__td--admin"

      case "EDITOR":
        return "table__td--editor"

      case "VIEWER":
        return "table__td--viewer"

      default:
        return role;
    }
  }
}
