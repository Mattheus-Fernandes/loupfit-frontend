import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { TokenService } from 'src/app/core/services/token.service';
import { take } from 'rxjs';
import { HttpErrorResponse } from 'src/app/core/models/types/http-error-response.type';
import { PreviousPageService } from 'src/app/core/services/previous-page.service';
import { Router } from '@angular/router';
import { LoginResponse } from './types/login-response.type';
import { ILoginPayload } from './interfaces/login-payload.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public httpError!: HttpErrorResponse

  constructor(
    private _loginService: LoginService,
    private _tokenService: TokenService,
    private _router: Router
  ){}

  onLogin(payload: ILoginPayload) {
    this._loginService.onLogin(payload)
    .pipe(take(1))
    .subscribe({
      next: (value: LoginResponse) => {

        this._tokenService.setToken(value.token)

        const HAS_TOKEN = this._tokenService.hasToken()

        if(HAS_TOKEN) {
          this._router.navigate(["/dashboard"])
        }
      },
      error: (err: HttpErrorResponse) => {
        this.httpError = err
      }
    })
  }
}
