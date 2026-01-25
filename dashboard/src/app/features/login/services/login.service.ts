import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/types/login-response copy';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url = "http://localhost:8001/v1/login"

  constructor(
    private _http: HttpClient
  ) { }

  onLogin(login: LoginResponse): Observable<LoginResponse> {
    return this._http.post<any>(this._url, login)
  }
}
