import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { take } from 'rxjs';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent {
  @Input() user: IUser = {} as IUser
  @Output() close = new EventEmitter<void>()
  @Output() sentConfirmation = new EventEmitter<void>()

  private readonly _userService = inject(UserService)

  public success: boolean = false

  btnCancel() {
    this.close.emit()
  }

  btnConfirm() {
    const id = this.user.id

    this._userService.deleteUser(id)
      .pipe(take(1))
      .subscribe(() => {
        this.sentConfirmation.emit()
        this.success = true
      })
  }
}
