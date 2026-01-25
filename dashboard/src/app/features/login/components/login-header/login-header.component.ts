import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { PreviousPageService } from 'src/app/core/services/previous-page.service';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent {

  constructor(
    private _previousPageService: PreviousPageService
  ){}

  pageBack() {
    this._previousPageService.previousPage()
  }

}
