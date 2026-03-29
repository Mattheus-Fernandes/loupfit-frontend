import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() onClick = new EventEmitter<void>()

  roleColor(role: string) {

    switch (role) {
      case "OWNER":
        return "card-user__access--owner"

      case "ADMIN":
        return "card-user__access--admin"

      case "EDITOR":
        return "card-user__access--editor"

      case "VIEWER":
        return "card-user__access--viewer"

      default:
        return role;
    }
  }

  roleIcon(role: string) {
    switch (role) {
      case "OWNER":
        return "crown"

      case "ADMIN":
        return "admin_panel_settings"

      case "EDITOR":
        return "edit"

      case "VIEWER":
        return "visibility"

      default:
        return role;
    }
  }

  abbreviationName(user: IUser): string {
    const firstLetterName = user.name.charAt(0)
    const firstLetterLastname = user.lastname.charAt(0)

    return `${firstLetterName}${firstLetterLastname}`
  }

  btnOnClick() {
    this.onClick.emit()
  }
}
