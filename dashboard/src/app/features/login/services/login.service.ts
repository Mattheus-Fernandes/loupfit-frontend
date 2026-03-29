import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../types/login-response.type';
import { ILoginPayload } from '../interfaces/login-payload.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url = "http://localhost:8001/v1/login"

  constructor(
    private _http: HttpClient
  ) { }

  onLogin(login: ILoginPayload): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(this._url, login)
  }
}
