import { Injectable } from '@angular/core';
import { Observable, delay, shareReplay } from 'rxjs';
import { UsersResponse } from '../models/types/users-response';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { IUser } from '../models/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = "http://localhost:8001/v1/user"

  private users$!: Observable<UsersResponse>

  constructor(
    private _http: HttpClient,
    private _tokenService: TokenService
  ) { }

  getAllUsers(): Observable<UsersResponse> {
    if (!this.users$) {
      this.users$ = this._http.get<UsersResponse>(this._url, { headers: this._tokenService.getHeaders() })
        .pipe(delay(1000), shareReplay(1))
    }

    return this.users$
  }

  registerUser(payload: IUser): Observable<IUser> {
    return this._http.post<IUser>(this._url, payload, { headers: this._tokenService.getHeaders() })
  }
}
