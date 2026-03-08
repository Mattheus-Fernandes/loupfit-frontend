import { Component } from '@angular/core';
import { PreviousPageService } from 'src/app/core/services/previous-page.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  constructor(
    private _previousPageService: PreviousPageService
  ) {}

  backPage() {
    this._previousPageService.previousPage()
  }
}
