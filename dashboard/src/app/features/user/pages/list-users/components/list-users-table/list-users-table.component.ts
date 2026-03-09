import { Component, Input } from '@angular/core';
import { UsersResponse } from 'src/app/core/models/types/users-response';

@Component({
  selector: 'app-list-users-table',
  templateUrl: './list-users-table.component.html',
  styleUrls: ['./list-users-table.component.scss']
})
export class ListUsersTableComponent {
  @Input() usersList: UsersResponse = []

  roleColor(role: string) {

    switch(role){
      case "OWNER":
        return "table__text--owner"

      case "ADMIN":
        return "table__text--admin"

      case "EDITOR":
        return "table__text--editor"

      case "VIEWER":
        return "table__text--viewer"
        
       default:
        return role;
    }
  }
}
