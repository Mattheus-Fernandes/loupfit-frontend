import { Component } from '@angular/core';
import { take } from 'rxjs';
import { IErroForm } from 'src/app/core/models/interfaces/errors/error-form.interface';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { HttpErrorResponse } from 'src/app/core/models/types/http-error-response.type';
import { PreviousPageService } from 'src/app/core/services/previous-page.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  constructor(
    private _userService: UserService,
    private _previousPageService: PreviousPageService
  ) {}

  backPage() {
    this._previousPageService.previousPage()
  }
}
