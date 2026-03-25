import { Injectable } from '@angular/core';
import { Observable, delay, map, shareReplay } from 'rxjs';
import { UsersResponse } from '../models/types/users-response';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { IUser } from '../models/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = "http://localhost:8001/v1/users"

  private users$!: Observable<UsersResponse>

  constructor(
    private _http: HttpClient,
    private _tokenService: TokenService
  ) { }

  getAllUsers(): Observable<UsersResponse> {
    return this._http.get<UsersResponse>(this._url, { headers: this._tokenService.getHeaders() })
      .pipe(
        map(users => users.sort((a, b) => a.name.localeCompare(b.name))),
        delay(1000)
      )
  }

  registerUser(payload: IUser): Observable<IUser> {
    return this._http.post<IUser>(this._url, payload, { headers: this._tokenService.getHeaders() })
  }

  editUser(id: number, payload: IUser): Observable<IUser> {
    return this._http.put<IUser>(`${this._url}/${id}`, payload, { headers: this._tokenService.getHeaders() })
  }

  editRole(id: number, role: string): Observable<IUser> {
    return this._http.put<IUser>(`${this._url}/${id}`, { role }, { headers: this._tokenService.getHeaders() })
  }

  deleteUser(id: number): Observable<IUser> {
    return this._http.delete<IUser>(`${this._url}/${id}`, { headers: this._tokenService.getHeaders() })
  }
}
