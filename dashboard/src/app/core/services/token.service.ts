import { Injectable } from '@angular/core';

const TOKEN_KEY = "auth_token"

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token)
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY)
  }

  removeToken(): void {
    localStorage.removeItem(TOKEN_KEY)
  }

  hasToken(): boolean {
    return !!this.getToken()
  }

}
