import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersResponse } from 'src/app/core/models/types/users-response';
import { IAction } from '../../interfaces/action.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {
  @Input() listUsers: UsersResponse = []
  @Output() selectUser  = new EventEmitter<IAction>()

  onSelected(value: IAction) {
    this.selectUser.emit({type: value.type, user: value.user})
  }
}
