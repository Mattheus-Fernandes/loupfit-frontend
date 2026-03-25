import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/core/models/interfaces/user.interface';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent {
  @Input() user: IUser = {} as IUser
  @Input() hasButton: boolean = false
  @Input() buttonText: string = ""

  roleColor(role: string) {

    switch (role) {
      case "OWNER":
        return "card-user__role--owner"

      case "ADMIN":
        return "card-user__role--admin"

      case "EDITOR":
        return "card-user__role--editor"

      case "VIEWER":
        return "card-user__role--viewer"

      default:
        return role;
    }
  }
}
